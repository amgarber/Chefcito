require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        console.log('🗑️ Cleaning Recipes, Ingredients, and related relations...');

        // Delete relations first
        await prisma.recipe_Ingredient.deleteMany({});
        await prisma.recipe_Type.deleteMany({});
        await prisma.instructions.deleteMany({});
        await prisma.favourite.deleteMany({}); // Opcional: favoritos de recetas si tenés
        await prisma.ingredient_Image.deleteMany({});

        // Now delete main entities
        await prisma.recipe.deleteMany({});
        await prisma.ingredients.deleteMany({});
        await prisma.image.deleteMany({}); // Si querés también eliminar las imágenes asociadas a recetas

        console.log('✅ Recipes, Ingredients, and relations cleaned successfully.');
    } catch (error) {
        console.error('❌ Error cleaning database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
