const express = require('express');
const {
    toggleFavorite,
    isFavorite,
    getAllFavorites,
    deleteFavorite
} = require('../controllers/favoritesController');

const router = express.Router();

router.post('/', toggleFavorite);
router.get('/:recipeId', isFavorite);
router.get('/', getAllFavorites);
router.delete('/:id', deleteFavorite);

module.exports = router;
