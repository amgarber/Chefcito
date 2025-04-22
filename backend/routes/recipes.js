const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipeById, addIngredientsAndSteps} = require('../controllers/recipeController');
const multer = require("multer");
const { createRecipe } = require("../controllers/recipeController");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), createRecipe);
router.patch("/", addIngredientsAndSteps )

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);

module.exports = router;
