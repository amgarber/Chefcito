// routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
const chatbotCtrl = require('../controllers/geminiController');

router.post('/recommend', chatbotCtrl.recommendRecipes);
module.exports = router;
