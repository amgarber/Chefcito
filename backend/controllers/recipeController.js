const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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

module.exports = {
    getAllRecipes,
    getRecipeById
};
