require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const ingredientsData = [
        {
            name: 'Chocolate',
            type: 'Sweets',
            imageUrl: ''
        },
        {
            name: 'Cocoa Powder',
            type: 'Powder',
            imageUrl: ''
        },
        {
            name: 'Flour',
            type: 'Base Ingredients',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/BellPepperGreen.webp'
        },
        {
            name: 'Brown Sugar',
            type: 'Sweetener',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/brownsugar.webp'
        }
    ];

    try {
        for (const ingredientData of ingredientsData) {
            // Primero creamos el ingrediente
            const ingredient = await prisma.ingredients.create({
                data: {
                    name: ingredientData.name,
                    type: ingredientData.type,
                }
            });

            // Luego creamos la imagen asociada
            await prisma.ingredient_Image.create({
                data: {
                    url: ingredientData.imageUrl,
                    ingredientId: ingredient.id
                }
            });

            console.log(`✅ Ingrediente "${ingredient.name}" creado con éxito`);
        }
    } catch (error) {
        console.error('❌ Error al crear los ingredientes:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
