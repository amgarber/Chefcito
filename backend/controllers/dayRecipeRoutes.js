const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/day-recipes
router.post('/', async (req, res) => {
    const { userId, recipeId, date, category } = req.body;

    try {
        const newEntry = await prisma.dayRecipe.create({
            data: {
                userId: parseInt(userId),
                recipeId: parseInt(recipeId),
                date: new Date(date),
                category,
            },
        });

        res.status(201).json(newEntry);
    } catch (error) {
        console.error('❌ Error creating day recipe:', error);
        res.status(500).json({ error: 'Error creating day recipe' });
    }
});

module.exports = router;
