const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipeById } = require('../controllers/recipeController');
const multer = require("multer");
const { createRecipe } = require("../controllers/recipeController");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), createRecipe);


router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);

module.exports = router;
