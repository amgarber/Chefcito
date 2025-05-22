const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipeById, addIngredientsAndSteps, getPublicRecipesByUser, getPrivateRecipesByUser} = require('../controllers/recipeController');
const multer = require("multer");
const { createRecipe } = require("../controllers/recipeController");
const {makePrivate} = require("../controllers/approvalController");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), createRecipe);
router.patch("/", addIngredientsAndSteps )

router.get('/', getAllRecipes);
router.get('/my-public', getPublicRecipesByUser);
router.get('/my-private', getPrivateRecipesByUser);
router.get('/:id', getRecipeById);
router.patch('/recipes/:id/make-private', makePrivate);








module.exports = router;
