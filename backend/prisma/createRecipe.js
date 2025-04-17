require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const recipesData = [
        {
            name: 'Greek Salad',
            description: 'Fresh cucumbers, tomatoes, red onion, feta cheese, and Kalamata olives, ' +
                'dressed with olive oil and oregano. A taste of the Mediterranean.',
            difficulty: 'Fácil',
            preparation_time: 15,
            userId: 1,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/GreekSalad.jpeg'
        },
        {
            name: 'Lasagna',
            description: '"Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese baked to' +
                ' golden perfection. A classic Italian comfort food.',
            difficulty: 'Media',
            preparation_time: 45,
            userId: 1,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/Lasagna.jpeg'
        },
        {
            name: 'Carbonara Pasta',
            description: 'Authentic Roman pasta with crispy pancetta, eggs, pecorino cheese, and black pepper. ' +
                'Creamy without using actual cream.',
            difficulty: 'Difícil',
            preparation_time: 60,
            userId: 1,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/Pasta.jpeg'
        },
        {
            name: 'Mushroom Risotto',
            description: 'Creamy arborio rice cooked with wild mushrooms, white wine, and parmesan cheese. ' +
                'Stirred constantly to release the starches',
            difficulty: 'Difícil',
            preparation_time: 60,
            userId: 1,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/MushroomRisotto.jpg'
        }
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
