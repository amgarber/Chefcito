require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const ingredientsData = [
        {
            name: 'Water',
            type: 'Base Ingredients',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/Water.webp'
        },
        {
            name: 'Cocoa Powder',
            type: 'Powder',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/cocoapower.webp'
        },
        {
            name: 'Flour',
            type: 'Base Ingredients',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/flour.webp'
        },
        {
            name: 'Brown Sugar',
            type: 'Sweetener',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/brownsugar.webp'
        },
        {
            name: 'Jalapeño',
            type: 'Vegetable',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/Jalapeño.webp'
        },
        {
            name: 'Salt',
            type: 'other',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/salt.webp'
        },
        {
            name: 'Pepper',
            type: 'Vegetable',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/Pepper.webp'
        },
        {
            name: 'Milk',
            type: 'Liquid',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/milk.webp'
        },
        {
            name: 'Paprika',
            type: 'Spicy',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/paprika.webp'
        },
        {
            name: 'Mushroom',
            type: 'Vegetable',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/mushroom.webp'
        },
        {
            name: 'Olive Oil',
            type: 'oil',
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/OliveOil.webp'
        },

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
