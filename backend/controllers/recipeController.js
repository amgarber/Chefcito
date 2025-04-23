const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const uploadToAzure = require("../services/azureUpload");

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await prisma.recipe.findMany({
            include: { image: true }
        });

        const formatted = recipes.map(recipe => ({
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            difficulty: recipe.difficulty,
            preparation_time: recipe.preparation_time,
            imageUrl: recipe.image?.url || null
        }));

        res.json(formatted);
    } catch (err) {
        console.error('Error al obtener recetas:', err);
        res.status(500).json({ message: 'Error al obtener recetas' });
    }
};

const getRecipeById = async (req, res) => {
    const { id } = req.params;

    try {
        const recipe = await prisma.recipe.findUnique({
            where: { id: parseInt(id) },
            include: {
                image: true,
                instructions: true,
                ingredients: {
                    include: { ingredient: true }
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
            imageUrl: recipe.image?.url || null,
            steps: recipe.instructions?.map((step, i) => ({
                id: step.id,
                title: `Step ${i + 1}`,
                content: step.Description
            })) || [],
            ingredients: recipe.ingredients?.map(ri => ri.ingredient.name) || []
        });
    } catch (error) {
        console.error('Error al obtener la receta:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const createRecipe = async (req, res) => {
    try {
        const {
            recipeTitle,
            recipeDescription,
            cookTimeMinutes,
            // cookTimeHours
        } = req.body;

        const imageFile = req.file;

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
                difficulty: "easy", // podés tomarlo también desde req.body si querés

                user: {
                    connect: {
                        id: req.user?.id || 1 // hay que agregar aca la autenticacion con el token para que guarde el verdadero id del usuario. ahora le puse 1 para que funcione
                    }
                },

                image: {
                    create: {
                        url: imageUrl,
                    }
                },
            },
        });

        console.log("✅ Receta creada:", newRecipe);
        return res.status(201).json({ message: "Recipe created", data: newRecipe });

    } catch (err) {
        console.error("❌ Error al crear receta:", err);
        return res.status(500).json({ message: "Error al crear receta" });
    }
};
const addIngredientsAndSteps = async (req, res) => {
    const { recipeId, ingredients, steps, filters } = req.body;

    try {
        // Verificamos que la receta exista
        const recipe = await prisma.recipe.findUnique({
            where: { id: recipeId }
        });

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        // 🧹 Borrar ingredientes previos (si estás actualizando)
        await prisma.recipe_Ingredient.deleteMany({
            where: { id_recipe: recipeId }
        });

        // ✅ Agregar ingredientes nuevos
        for (const ingredient of ingredients) {
            await prisma.recipe_Ingredient.create({
                data: {
                    id_recipe: recipeId,
                    id_ingredient: ingredient.id,
                    quantity: ingredient.quantity,
                    measurement_unit: 'g' // o podés hacerlo dinámico si lo necesitás
                }
            });
        }

        // 🧹 Borrar instrucciones previas (opcional)
        await prisma.instructions.deleteMany({
            where: { id_recipe: recipeId }
        });

        // ✅ Agregar pasos
        for (let i = 0; i < steps.length; i++) {
            await prisma.instructions.create({
                data: {
                    id_recipe: recipeId,
                    steps_numerations: `Paso ${i + 1}`,
                    Description: steps[i]
                }
            });
        }

        // 🧹 Borrar filtros previos (opcional si es edición)
        await prisma.recipe_Type.deleteMany({
            where: { id_recipe: recipeId }
        });

        // ✅ Asociar filtros (tags)
        if (filters && filters.length > 0) {
            for (const tagName of filters) {
                const filter = await prisma.recipe_Filter.findFirst({
                    where: { Name: tagName }
                });

                if (filter) {
                    await prisma.recipe_Type.create({
                        data: {
                            id_recipe: recipeId,
                            id_recipeFilter: filter.id_RecipeFilter
                        }
                    });
                }
            }
        }

        res.status(200).json({ message: 'Ingredients, steps, and filters updated successfully' });

    } catch (error) {
        console.error('Error adding ingredients, steps or filters:', error);
        res.status(500).json({ message: 'Failed to update recipe' });
    }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    addIngredientsAndSteps
};
