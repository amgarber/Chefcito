//rutas como /api/register y /api/login
// routes/authRoutes.js
//este vendria a ser nuestro archivo server.js
const express = require('express');
const { register} = require('../controllers/authController');
const { login } = require('../controllers/authController');


const router = express.Router();

router.post('/register', register);
//router.post('/login', login);

router.post('/login', login);

module.exports = router;
