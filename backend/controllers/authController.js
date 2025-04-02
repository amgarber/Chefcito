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

//const register = async (req, res) => {
    // l--eer datos de req.body
    // validar usuario
    // guardar en la base de datos
    // responder con éxito o error
//}; //el controlador se encarga de la lógica de negocio: validar, guardar, responder, etc.ç

const login = async (req, res) => {
    try {
        const {username,email, password} = req.body;

        // 1. Verificar si el usuario existe en la base de datos
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { username: email } // por si puso el username
                ]
            }
        });


        if (!user) {
            return res.status(401).json({error: "Usuario o contraseña incorrectos"});
        }

        // 2. Comparar la contraseña ingresada con la almacenada (hash)
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({error: "Usuario o contraseña incorrectos"});
        }

        // 3. Generar un token JWT
        const token = jwt.sign(
            {userId: user.id, username: user.username, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        // 4. Enviar el token al frontend
        res.json({token, user: {username: user.username, role: user.role}});

    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({error: "Error del servidor"});
    }
};

module.exports = { register, login };
