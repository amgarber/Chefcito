require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const filters = [
        { Name: 'Vegan' },
        { Name: 'Gluten-Free' },
        { Name: 'Breakfast' },
        { Name: 'Low-Calorie' },
        { Name: 'Quick Lunch' },
        { Name: 'Keto' },
        { Name: 'Dessert' },
    ];

    try {
        for (const filter of filters) {
            const created = await prisma.recipe_Filter.create({
                data: filter,
            });
            console.log(`✅ Filter "${created.Name}" created successfully`);
        }
    } catch (error) {
        console.error('❌ Error creating filters:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
