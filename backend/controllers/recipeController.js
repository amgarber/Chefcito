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

const addIngredientsAndSteps = async (recipeId, ingredients, steps) => {
    try {
        const recipe = await prisma.recipe.findUnique({
            where: { id: recipeId },
            include: { ingredients: true }
        });

        if (!recipe) {
            throw new Error('Recipe not found');
        }

        // Add ingredients
        for (const ingredient of ingredients) {
            await prisma.recipeIngredient.create({
                data: {
                    recipeId,
                    ingredientId: ingredient.id,
                    quantity: ingredient.quantity
                }
            });
        }

        // Add steps
        for (const step of steps) {
            await prisma.instruction.create({
                data: {
                    recipeId,
                    description: step
                }
            });
        }

    } catch (error) {
        console.error('Error adding ingredients and steps:', error);
    }
}



module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    addIngredientsAndSteps
};
