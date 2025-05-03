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
const { updateUser } = require('../controllers/authController');
const jwt = require('jsonwebtoken');

const verifyTokenInline = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // no autorizado

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // token inválido
        req.userId = user.id;
        next();
    });
};

router.put('/update-profile', verifyTokenInline, updateUser);

module.exports = router;
