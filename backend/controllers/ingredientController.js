// backend/controllers/ingredientController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createIngredient = async (req, res) => {
    const { name, imageUrl } = req.body;

    if (!name || !imageUrl) {
        return res.status(400).json({ message: 'Name and image URL are required' });
    }

    try {
        const newIngredient = await prisma.ingredients.create({
            data: {
                name,
                type: "other", // no sabia q poner
                images: {
                    create: {
                        url: imageUrl,
                    },
                },
            },
        });

        res.status(201).json(newIngredient);
    } catch (error) {
        console.error('Error creating ingredient:', error);
        res.status(500).json({ message: 'Error creating ingredient' });
    }
};

module.exports = { createIngredient };