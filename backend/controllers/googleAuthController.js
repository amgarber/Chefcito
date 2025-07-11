const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res) => {
    const { credential } = req.body;

    try {
        // 🔍 Agregamos logs para inspeccionar el token recibido y el clientId
        console.log("🔑 Token recibido del frontend:", credential?.slice(0, 40) + "...");
        console.log("🔐 GOOGLE_CLIENT_ID en backend:", process.env.GOOGLE_CLIENT_ID);

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, name, picture } = payload;

        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    username: name,
                    password: null,
                    picture: {
                        create: {
                            url: picture, // Esto guarda el URL en User_Image
                        }
                    }
                },
                include: {
                    picture: true // Opcional: incluye la imagen en la respuesta
                }
            });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({ token, user });

    } catch (err) {
        // 🧨 Agregamos más detalles del error
        console.error('❌ Error en Google Login:', err.message || err);
        res.status(401).json({ message: 'Login con Google falló' });
    }
};
