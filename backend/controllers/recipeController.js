const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const uploadToAzure = require("../services/azureUpload");

const getAllRecipes = async (req, res) => {
    const { query, filters, ingredients } = req.query;

    try {
        const recipes = await prisma.recipe.findMany({
            where: {
                AND: [
                    { Privacy_settings: 'PUBLIC' },

                    query
                        ? {
                            OR: [
                                {
                                    name: {
                                        contains: query,
                                        mode: 'insensitive'
                                    }
                                },
                                {
                                    ingredients: {
                                        some: {
                                            ingredient: {
                                                name: {
                                                    contains: query,
                                                    mode: 'insensitive'
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                        : {},
                    filters
                        ? {
                            recipeTypes: {
                                some: {
                                    filter: {
                                        Name: {
                                            in: filters.split(',')
                                        }
                                    }
                                }
                            }
                        }
                        : {},

                    ingredients
                        ? {
                            ingredients: {
                                some: {
                                    id_ingredient: {
                                        in: ingredients.split(',').map(Number)
                                    }
                                }
                            }
                        }
                        : {}
                ]
            },
            include: {
                image: true,
                recipeTypes: {
                    include: { filter: true }
                }
            }
        });

        const requiredFilters = filters ? filters.split(',') : [];

        const filteredRecipes = recipes.filter(recipe => {
            const recipeFilterNames = recipe.recipeTypes.map(rt => rt.filter.Name);
            return requiredFilters.every(f => recipeFilterNames.includes(f));
        });

        const formatted = filteredRecipes.map(recipe => ({
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            difficulty: recipe.difficulty,
            preparation_time: recipe.preparation_time,
            imageUrl: recipe.image?.url || null,
            filters: recipe.recipeTypes.map(rt => rt.filter.Name)
        }));

        res.json(formatted);

    } catch (error) {
        console.error('Error al obtener recetas con filtros:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};



const getRecipeById = async (req, res) => {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    try {
        const recipe = await prisma.recipe.findUnique({
            where: { id: Number(id) },
            include: {
                image: true,
                instructions: true,
                user: {
                    select: { username: true }
                },
                ingredients: {
                    include: {
                        ingredient: {
                            include: {
                                images: true
                            }
                        }
                    }
                }
            }
        });

        if (!recipe) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }

        res.json({
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            preparation_time: recipe.preparation_time,
            difficulty: recipe.difficulty,
            author: recipe.user.username,
            imageUrl: recipe.image?.url || null,
            steps: recipe.instructions?.map((step, i) => ({
                id: step.id,
                title: `Step ${i + 1}`,
                content: step.Description
            })) || [],
            ingredients: recipe.ingredients?.map(ri => ({
                id:ri.ingredient.id,
                name: ri.ingredient.name,
                quantity: ri.quantity,
                measurement_unit: ri.measurement_unit,
                imageUrl: ri.ingredient.images[0]?.url || ''
            })) || []
        });
    } catch (error) {
        console.error('Error al obtener la receta:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


const jwt = require('jsonwebtoken');

const createRecipe = async (req, res) => {
    try {
        const {
            recipeTitle,
            recipeDescription,
            cookTimeMinutes,
        } = req.body;

        const imageFile = req.file;
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Token requerido' });
        }

        let userId;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            userId = decoded.userId;
        } catch (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }

        if (!imageFile) {
            return res.status(400).json({ message: "Image is required" });
        }

        const imageUrl = await uploadToAzure(imageFile);
        const preparationTime = parseInt(cookTimeMinutes || 0);

        const newRecipe = await prisma.recipe.create({
            data: {
                name: recipeTitle,
                description: recipeDescription,
                preparation_time: preparationTime,
                difficulty: "easy",
                Privacy_settings: "PRIVATE",
                user: {
                    connect: {
                        id: userId
                    }
                },
                image: {
                    create: {
                        url: imageUrl,
                    }
                },
            },
        });


        console.log("✅ Receta privada creada por el usuario:", userId);
        return res.status(201).json({ message: "Private recipe created", data: newRecipe });

    } catch (err) {
        console.error("❌ Error al crear receta:", err);
        return res.status(500).json({ message: "Error al crear receta" });
    }
};

const addIngredientsAndSteps = async (req, res) => {
    const { recipeId, ingredients, steps, filters } = req.body;

    // ✅ Validación fuerte del ID
    const parsedId = parseInt(recipeId, 10);
    if (!parsedId || isNaN(parsedId)) {
        return res.status(400).json({ message: 'recipeId inválido' });
    }

    // (Opcional) Validar que ingredientes y pasos existan
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({ message: 'Se requiere al menos un ingrediente' });
    }

    if (!Array.isArray(steps) || steps.length === 0) {
        return res.status(400).json({ message: 'Se requiere al menos un paso' });
    }

    try {
        // Verificamos que la receta exista
        const recipe = await prisma.recipe.findUnique({
            where: { id: parsedId }
        });

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        // 🧹 Borrar ingredientes previos
        await prisma.recipe_Ingredient.deleteMany({
            where: { id_recipe: parsedId }
        });

        // ✅ Agregar ingredientes nuevos
        for (const ingredient of ingredients) {
            await prisma.recipe_Ingredient.create({
                data: {
                    id_recipe: parsedId,
                    id_ingredient: ingredient.id,
                    quantity: ingredient.quantity,
                    measurement_unit: ingredient.measurement_unit || 'g'  // por si querés hacerlo dinámico
                }
            });
        }

        // 🧹 Borrar instrucciones previas
        await prisma.instructions.deleteMany({
            where: { id_recipe: parsedId }
        });

        // ✅ Agregar pasos nuevos
        for (let i = 0; i < steps.length; i++) {
            await prisma.instructions.create({
                data: {
                    id_recipe: parsedId,
                    steps_numerations: `Paso ${i + 1}`,
                    Description: steps[i]
                }
            });
        }

        // 🧹 Borrar filtros previos
        await prisma.recipe_Type.deleteMany({
            where: { id_recipe: parsedId }
        });

        // ✅ Asociar nuevos filtros (tags)
        if (filters && filters.length > 0) {
            for (const tagName of filters) {
                const filter = await prisma.recipe_Filter.findFirst({
                    where: { Name: tagName }
                });

                if (filter) {
                    await prisma.recipe_Type.create({
                        data: {
                            id_recipe: parsedId,
                            id_recipeFilter: filter.id_RecipeFilter
                        }
                    });
                }
            }
        }

        return res.status(200).json({ message: 'Ingredients, steps, and filters updated successfully' });

    } catch (error) {
        console.error('Error adding ingredients, steps or filters:', error);
        return res.status(500).json({ message: 'Failed to update recipe' });
    }
};
const getPublicRecipesByUser = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const jwt = require('jsonwebtoken');

    if (!token) return res.status(401).json({ message: 'Token requerido' });

    let userId;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }

    try {
        const recipes = await prisma.recipe.findMany({
            where: {
                UserId: userId,
                Privacy_settings: 'PUBLIC'
            },
            include: {
                image: true
            }
        });

        console.log("✅ Recetas públicas encontradas:", recipes);
        res.json(recipes ?? []); // aseguramos array
    } catch (err) {
        console.error("❌ ERROR en getPublicRecipesByUser:", err);
        res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }

};

const getPrivateRecipesByUser = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const jwt = require('jsonwebtoken');

    if (!token) return res.status(401).json({ message: 'Token requerido' });

    let userId;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }

    try {
        const recipes = await prisma.recipe.findMany({
            where: {
                UserId: userId,
                Privacy_settings: 'PRIVATE'
            },
            include: {
                image: true
            }
        });

        console.log("✅ Recetas privadas encontradas:", recipes);
        res.json(recipes ?? []);
    } catch (err) {
        console.error("❌ ERROR en getPrivateRecipesByUser:", err);
        res.status(500).json({ message: 'Error interno del servidor', error: err.message });
    }
};
const getRecipeImage = async (req, res) => {
    const { id } = req.params;

    try {
        const recipe = await prisma.recipe.findUnique({
            where: { id: Number(id) },
            include: { image: true }
        });

        if (!recipe || !recipe.image || !recipe.image.url) {
            return res.status(404).send('Image not found');
        }

        // Redirigimos directamente a la URL donde está alojada la imagen (ej. Azure)
        res.redirect(recipe.image.url);

    } catch (error) {
        console.error("❌ Error al obtener imagen de receta:", error);
        res.status(500).json({ message: 'Error al obtener imagen' });
    }
};

const getAllPublicRecipes = async (req, res) => {
    try {
        const recipes = await prisma.recipe.findMany({
            where: {
                Privacy_settings: 'PUBLIC'
            },
            include: { image: true }
        });

        res.json(recipes);
    } catch (err) {
        console.error("❌ Error al obtener recetas públicas (admin):", err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getAllPrivateRecipes = async (req, res) => {
    try {
        const recipes = await prisma.recipe.findMany({
            where: {
                Privacy_settings: 'PRIVATE'
            },
            include: { image: true }
        });

        res.json(recipes);
    } catch (err) {
        console.error("❌ Error al obtener recetas privadas (admin):", err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const makeRecipePublic = async (req, res) => {
    const recipeId = parseInt(req.params.id);

    try {
        const updated = await prisma.recipe.update({
            where: { id: recipeId },
            data: {
                Privacy_settings: 'PUBLIC',
                Approval_Status: 'APPROVED'
            }
        });

        res.json({ message: "Receta marcada como pública", recipe: updated });
    } catch (err) {
        console.error("Error al cambiar a pública:", err);
        res.status(500).json({ message: "Error interno al cambiar visibilidad" });
    }
};





module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    addIngredientsAndSteps,
    getPublicRecipesByUser,
    getPrivateRecipesByUser,
    getRecipeImage,
    getAllPublicRecipes,
    getAllPrivateRecipes,
    makeRecipePublic
};
