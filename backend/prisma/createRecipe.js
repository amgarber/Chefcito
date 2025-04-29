require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const recipeData = {
        name: 'Chocolate Cookies',
        description: 'Chocolate crinkle cookies are a Christmas classic—and they\'re so good they should be popular all year...',
        difficulty: 'Easy',
        preparation_time: 15,
        userId: 9, // Make sure this user exists
        imageUrl: 'https://chefcito.blob.core.windows.net/photos/1745876238302-chocolateCookies.jpg',
        instructions: [
            { stepNumber: '1', description: 'Preheat the oven to 180°C (350°F).' },
            { stepNumber: '2', description: 'Mix all the dry ingredients together.' },
            { stepNumber: '3', description: 'Add the wet ingredients and form small balls.' },
            { stepNumber: '4', description: 'Bake for 10–12 minutes.' }
        ],
        recipeTypes: ['Dessert'], // Recipe Filter names
        ingredients: [
            { name: 'Flour', quantity: 200, measurementUnit: 'g' },
            { name: 'Sugar', quantity: 100, measurementUnit: 'g' },
            { name: 'Egg', quantity: 2, measurementUnit: 'units' },
        ]
    };

    try {
        // Create the image
        const image = await prisma.image.create({
            data: { url: recipeData.imageUrl }
        });

        // Create the recipe
        const recipe = await prisma.recipe.create({
            data: {
                name: recipeData.name,
                description: recipeData.description,
                difficulty: recipeData.difficulty,
                preparation_time: recipeData.preparation_time,
                UserId: recipeData.userId, // Ojo con mayúsculas: depende de tu schema
                imageId: image.id
            }
        });

        console.log(`✅ Recipe "${recipe.name}" created successfully.`);

        // Create the instructions
        for (const instruction of recipeData.instructions) {
            await prisma.instructions.create({
                data: {
                    id_recipe: recipe.id,
                    steps_numerations: instruction.stepNumber,
                    Description: instruction.description
                }
            });
        }
        console.log(`✅ Instructions added for "${recipe.name}".`);

        // Assign recipe types (filters)
        for (const filterName of recipeData.recipeTypes) {
            const filter = await prisma.recipe_Filter.findFirst({
                where: { Name: filterName }
            });

            if (!filter) {
                console.error(`❌ Filter "${filterName}" not found.`);
                continue;
            }

            await prisma.recipe_Type.create({
                data: {
                    id_recipe: recipe.id,
                    id_recipeFilter: filter.id_RecipeFilter
                }
            });
        }
        console.log(`✅ Filters assigned to "${recipe.name}".`);

        // Assign ingredients by name
        for (const ingredient of recipeData.ingredients) {
            const existingIngredient = await prisma.ingredients.findFirst({
                where: { name: ingredient.name }
            });

            if (!existingIngredient) {
                console.error(`❌ Ingredient "${ingredient.name}" not found.`);
                continue;
            }

            await prisma.recipe_Ingredient.create({
                data: {
                    id_recipe: recipe.id,
                    id_ingredient: existingIngredient.id,
                    measurement_unit: ingredient.measurementUnit,
                    quantity: ingredient.quantity
                }
            });
        }
        console.log(`✅ Ingredients assigned to "${recipe.name}".`);

    } catch (error) {
        console.error('❌ Error while creating the complete recipe:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
