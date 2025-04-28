require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const recipesData = [
        {
            name: 'Choclate Cookies',
            description: '\'Chocolate crinkle cookies are a Christmas classic—and they\'re so good they should be popular all year. Their distinctive, variegated appearance hints at what lies within; deep, dark fissures of chocolate peak through their crispy, crackly confectioners',
            difficulty: 'Fácil',
            preparation_time: 15,
            userId: 1,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/chocolateCookies.jpg'
        },


    ];

    try {
        for (const recipeData of recipesData) {
            const image = await prisma.image.create({
                data: { url: recipeData.imageUrl }
            });

            const recipe = await prisma.recipe.create({
                data: {
                    name: recipeData.name,
                    description: recipeData.description,
                    difficulty: recipeData.difficulty,
                    preparation_time: recipeData.preparation_time,
                    UserId: recipeData.userId,
                    imageId: image.id
                }
            });

            console.log(`✅ Receta "${recipe.name}" creada con éxito`);
        }
    } catch (error) {
        console.error('❌ Error al crear las recetas:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
