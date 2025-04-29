require('dotenv').config();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTestUser() {
    const hashedPassword = await bcrypt.hash('1234', 10); // o la contraseña que vayas a probar

    const user = await prisma.user.create({
        data: {
            email: 'chefcito@gmail.com',
            username: 'chefcito',
            password: hashedPassword
        }
    });

    console.log('Usuario creado:', user);
}

createTestUser();
