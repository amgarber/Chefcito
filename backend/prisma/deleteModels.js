require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        // Borramos primero las tablas hijas para no violar constraints de Foreign Key
        await prisma.recipe_Type.deleteMany({});
        await prisma.recipe_Ingredient.deleteMany({});
        await prisma.shopping_List_Ingredient.deleteMany({});
        await prisma.ingredient_Image.deleteMany({});
        await prisma.favourite.deleteMany({});
        await prisma.instructions.deleteMany({});
        await prisma.recipe.deleteMany({});
        await prisma.ingredients.deleteMany({});
        await prisma.recipe_Filter.deleteMany({});
        await prisma.shopping_List.deleteMany({});
        await prisma.planner.deleteMany({});
        await prisma.image.deleteMany({});
        await prisma.user.deleteMany({});

        console.log('✅ Todos los datos fueron eliminados exitosamente');
    } catch (error) {
        console.error('❌ Error al eliminar datos:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
