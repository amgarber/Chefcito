const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        const filters = await prisma.recipe_Filter.findMany();
        res.json(filters);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching filters' });
    }
});

module.exports = router;
