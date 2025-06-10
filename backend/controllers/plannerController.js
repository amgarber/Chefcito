const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/authMiddleware');

const prisma = new PrismaClient();
const router = express.Router();

// POST /api/planner
router.post('/', authenticateToken, async (req, res) => {
    const { recipeId, category, date } = req.body;
    console.log("🧠 req.user =", req.user);
    const userId = req.user.userId;


    try {
        const newEntry = await prisma.plannerRecipe.create({
            data: {
                userId,
                recipeId: parseInt(recipeId, 10),
                date: new Date(date),
                category,
            },
            include: {
                recipe: {
                    include: { image: true },
                },
            },
        });

        res.status(201).json(newEntry);
    } catch (err) {
        console.error("❌ Error creating planner entry:", err);
        res.status(500).json({ error: "Error creating planner entry", details: err.message });
    }
});

// GET /api/planner/day?date=YYYY-MM-DD
router.get('/day', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const { date } = req.query;

    try {
        const entries = await prisma.plannerRecipe.findMany({
            where: {
                userId,
                date: new Date(date),
            },
            include: {
                recipe: {
                    include: { image: true },
                },
            },
            orderBy: { category: 'asc' },
        });

        res.json(entries);
    } catch (err) {
        console.error("❌ Error fetching planner data:", err);
        res.status(500).json({ error: "Error fetching planner data", details: err.message });
    }
});

module.exports = router;
