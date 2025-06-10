const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ error: 'Token requerido' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('Token inválido:', err);
            return res.status(403).json({ error: 'Token inválido' });
        }

        req.user = user; // Lo que se guardó al hacer login
        next();
    });
}

module.exports = { authenticateToken };
