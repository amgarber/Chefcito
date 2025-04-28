// backend/routes/ingredientCreateRoutes.js
const express = require('express');
const router = express.Router();
const { createIngredient } = require('../controllers/ingredientController');

// POST /api/ingredients/create
router.post('/', createIngredient);

module.exports = router;