const express = require('express');
const router = express.Router();
const { addIngredientsToList, getShoppingLists, toggleBoughtStatus, deleteShoppingList} = require('../controllers/shoppingListController');


router.post('/add-ingredients', addIngredientsToList);
router.get('/', getShoppingLists);
router.patch('/toggle-bought', toggleBoughtStatus);
router.delete('/:id', deleteShoppingList);

module.exports = router;
