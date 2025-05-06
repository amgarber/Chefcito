const express = require('express');
const { toggleFavorite, isFavorite, getAllFavorites} = require('../controllers/favoritesController');

const router = express.Router();

router.post('/', toggleFavorite);
router.get('/:recipeId', isFavorite);
router.get('/', getAllFavorites)

module.exports = router;
