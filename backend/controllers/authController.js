//  lógica de register/login
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await prisma.User.findFirst({
            where: {
                OR: [
                    { email },
                    { username }
                ]
            }
        });

        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario o el email ya están registrados' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.User.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: newUser.id });
    } catch (error) {
        console.error(error); // 👈 asegurate que esté esto
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};
module.exports = { register };

//const register = async (req, res) => {
    // l--eer datos de req.body
    // validar usuario
    // guardar en la base de datos
    // responder con éxito o error
//}; //el controlador se encarga de la lógica de negocio: validar, guardar, responder, etc.