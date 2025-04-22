// routes/ingredientsRoutes.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /api/ingredients?query=ajo
router.get('/', async (req, res) => {
    const { query } = req.query;
    try {
        const ingredients = await prisma.ingredients.findMany({
            where: {
                name: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            take: 10,
            include: {
                images: true, // 👈 esto trae las imágenes
            }
        });
        res.json(ingredients);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
