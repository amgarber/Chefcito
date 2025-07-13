//  lógica de register/login
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const uploadToAzure = require('../services/azureUpload');

const validatePassword = (password) => {
    const regex =  /^(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
};

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const file = req.file;

    try {
        // 🔒 Verificar si el usuario ya existe
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [{ email }, { username }]
            }
        });

        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario o el email ya están registrados' });
        }

        if(!validatePassword(password)) {
            return res.status(400).json({ message: 'Password should contain 8 characters an 1 upper case' });
        }

        // 🔐 Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // 🧱 Preparar los datos del nuevo usuario
        const newUserData = {
            username,
            email,
            password: hashedPassword,
            authProvider: 'local'
        };

        // 📷 Subir imagen del usuario si se proporciona, o asignar imagen por defecto
        let imageUrl;

        if (file) {
            imageUrl = await uploadToAzure(file);
        } else {
            imageUrl = "https://chefcito.blob.core.windows.net/photos/DefaultProfilePic.jpeg";
        }

        const image = await prisma.user_Image.create({
            data: { url: imageUrl }
        });

        newUserData.picture = { connect: { id: image.id } };

        // 🙌 Crear el usuario
        const newUser = await prisma.user.create({
            data: newUserData
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: newUser.id });
    } catch (error) {
        console.error('❌ Error al registrar:', error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

const login = async (req, res) => {
    try {
        const {username,email, password} = req.body;

        // 1. Verificar si el usuario existe en la base de datos
        const user = await prisma.user.findUnique({
            where: { email },
            include: { picture: true }
        });

        if (!user) {
            return res.status(401).json({error: "Usuario o contraseña incorrectos"});
        }

        if (user.authProvider !== 'local') {
            return res.status(403).json({error: "Cuenta registrada con otro proveedor de autenticación"
            });
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
        res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
                pictureUrl: user.picture?.url || null
            }
        });

    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({error: "Error del servidor"});
    }
};


const updateUser = async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token no encontrado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId; // depende de qué guardaste en tu token
        const { username } = req.body;

        // ⚡ Verificar si el username ya existe en otro usuario
        const existingUser = await prisma.user.findUnique({
            where: { username }
        });

        if (existingUser && existingUser.id !== userId) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
        }

        // ⚡ Actualizar el usuario
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { username },
        });

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: 'Token inválido o error al actualizar' });
    }
};
const getUserProfile = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token requerido' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            include: { picture: true }
        });

        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        res.json({
            username: user.username,
            email: user.email,
            pictureUrl: user.picture?.url || null
        });
    } catch (err) {
        console.error("❌ Error al obtener perfil:", err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }



};

module.exports = { register, login, updateUser, getUserProfile };



