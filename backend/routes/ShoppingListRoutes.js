const express = require('express');
const router = express.Router();
const { addIngredientsToList, getShoppingLists, toggleBoughtStatus} = require('../controllers/shoppingListController');


router.post('/add-ingredients', addIngredientsToList);
router.get('/', getShoppingLists);
router.patch('/toggle-bought', toggleBoughtStatus);

module.exports = router;
