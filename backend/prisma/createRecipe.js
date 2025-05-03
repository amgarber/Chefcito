require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Helper to generate emoji-style URL if no imageUrl is provided
function generateEmojiUrl(ingredientName) {
    const formattedName = ingredientName.toLowerCase().replace(/\s+/g, '-');
    return `https://em-content.zobj.net/source/apple/391/${formattedName}.png`;
}

async function main() {
    const recipesData = [
        {
            name: 'Salad',
            description: 'A fresh and colorful salad made with crisp greens, juicy tomatoes, olives, feta cheese, and a light dressing.',
            difficulty: 'Easy',
            preparation_time: 10,
            userId: 7,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/Salad.webp',
            instructions: [
                { stepNumber: '1', description: 'Wash and dry the lettuce.' },
                { stepNumber: '2', description: 'Slice the cherry tomatoes in half.' },
                { stepNumber: '3', description: 'Cut the feta cheese into cubes.' },
                { stepNumber: '4', description: 'Mix lettuce, tomatoes, feta cheese, and olives in a bowl.' },
                { stepNumber: '5', description: 'Drizzle with olive oil and season with salt and pepper to taste.' }
            ],
            recipeTypes: ['Lunch', 'Mediterranean', 'Low-Calorie'],
            ingredients: [
                { name: 'Lettuce', quantity: 100, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/leafy-green_1f96c.png' },
                { name: 'Cherry Tomato', quantity: 150, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/tomato_1f345.png' },
                { name: 'Feta Cheese', quantity: 100, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png' },
                { name: 'Black Olive', quantity: 50, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/olive_1fad2.png' },
                { name: 'Olive Oil', quantity: 2, measurementUnit: 'tbsp', imageUrl: 'https://em-content.zobj.net/source/apple/391/oil-drum_1f6e2-fe0f.png' },
                { name: 'Salt', quantity: 1, measurementUnit: 'tsp', imageUrl: 'https://em-content.zobj.net/source/apple/391/shaker_1f9c2.png' },
                { name: 'Black Pepper', quantity: 0.5, measurementUnit: 'tsp', imageUrl: 'https://em-content.zobj.net/source/apple/391/black-circle_26ab.png' }
            ]
        },
        {
            name: 'Cheeseburger with Fries',
            description: 'Juicy beef burger with melted cheese, fresh lettuce, tomato, and crispy fries on the side.',
            difficulty: 'Easy',
            preparation_time: 20,
            userId: 7, // Ajustá si necesitás
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/burguer.webp', // 👉 tenés que subir la imagen a tu blob como cheeseburger.webp
            instructions: [
                { stepNumber: '1', description: 'Form beef patties and season them with salt and pepper.' },
                { stepNumber: '2', description: 'Grill or pan-fry the patties until cooked to desired doneness.' },
                { stepNumber: '3', description: 'Toast the burger buns lightly.' },
                { stepNumber: '4', description: 'Assemble the burgers with cheese, lettuce, tomato, and cooked patty.' },
                { stepNumber: '5', description: 'Serve hot with crispy potato wedges and dipping sauce.' }
            ],
            recipeTypes: ['Lunch', 'Dinner'],
            ingredients: [
                {
                    name: 'Beef Patty',
                    quantity: 1,
                    measurementUnit: 'unit',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/cut-of-meat_1f969.png'
                },
                {
                    name: 'Burger Bun',
                    quantity: 1,
                    measurementUnit: 'unit',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/hamburger_1f354.png'
                },
                {
                    name: 'Cheddar Cheese',
                    quantity: 1,
                    measurementUnit: 'slice',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png'
                },
                {
                    name: 'Lettuce',
                    quantity: 20,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/leafy-green_1f96c.png'
                },
                {
                    name: 'Tomato',
                    quantity: 1,
                    measurementUnit: 'unit',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/tomato_1f345.png'
                },
                {
                    name: 'Potato',
                    quantity: 150,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/potato_1f954.png'
                },
                {
                    name: 'Salt',
                    quantity: 1,
                    measurementUnit: 'tsp',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/shaker_1f9c2.png'
                },
                {
                    name: 'Black Pepper',
                    quantity: 0.5,
                    measurementUnit: 'tsp',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/black-circle_26ab.png'
                }
            ]
        },
        {
            name: 'Rice with Roasted Fish',
            description: 'Creamy risotto-style rice served with perfectly roasted fish, seasoned and pan-seared to perfection.',
            difficulty: 'Medium',
            preparation_time: 30,
            userId: 7, // Asegurate que exista
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/free-photo-of-rice-with-roasted-fish.jpeg', // 👉 subí esta imagen a tu blob
            instructions: [
                { stepNumber: '1', description: 'Season the fish fillet with salt and pepper.' },
                { stepNumber: '2', description: 'Pan-sear the fish until crispy on the outside and tender inside.' },
                { stepNumber: '3', description: 'Cook the rice with broth, stirring until creamy.' },
                { stepNumber: '4', description: 'Plate the creamy rice and place the roasted fish fillet on top.' },
                { stepNumber: '5', description: 'Garnish with chopped parsley and serve immediately.' }
            ],
            recipeTypes: ['Dinner', 'Mediterranean', 'Low-Calorie'],
            ingredients: [
                {
                    name: 'Fish Fillet',
                    quantity: 1,
                    measurementUnit: 'unit',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/fish_1f41f.png'
                },
                {
                    name: 'Rice',
                    quantity: 200,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/cooked-rice_1f35a.png'
                },
                {
                    name: 'Vegetable Broth',
                    quantity: 400,
                    measurementUnit: 'ml',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/pot-of-food_1f372.png'
                },
                {
                    name: 'Olive Oil',
                    quantity: 2,
                    measurementUnit: 'tbsp',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/oil-drum_1f6e2-fe0f.png'
                },
                {
                    name: 'Salt',
                    quantity: 1,
                    measurementUnit: 'tsp',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/shaker_1f9c2.png'
                },
                {
                    name: 'Black Pepper',
                    quantity: 0.5,
                    measurementUnit: 'tsp',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/black-circle_26ab.png'
                },
                {
                    name: 'Parsley',
                    quantity: 5,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/herb_1f33f.png'
                }
            ]
        },
        {
            name: 'Tomato Basil Soup',
            description: 'A warm and comforting creamy tomato soup made with fresh basil and topped with shaved Parmesan cheese.',
            difficulty: 'Easy',
            preparation_time: 25,
            userId: 7, // Asegurate que exista
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/CreamySoup.jpg', // 👉 subí esta imagen a tu blob storage
            instructions: [
                { stepNumber: '1', description: 'In a large pot, sauté chopped onions and garlic in olive oil until translucent.' },
                { stepNumber: '2', description: 'Add chopped tomatoes and cook until softened.' },
                { stepNumber: '3', description: 'Add vegetable broth and bring to a simmer.' },
                { stepNumber: '4', description: 'Blend the soup until smooth, then stir in fresh basil and cream if desired.' },
                { stepNumber: '5', description: 'Serve hot, topped with shaved Parmesan cheese and more fresh basil.' }
            ],
            recipeTypes: ['Lunch', 'Dinner', 'Low-Calorie', 'Mediterranean'],
            ingredients: [
                {
                    name: 'Tomato',
                    quantity: 500,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/tomato_1f345.png'
                },
                {
                    name: 'Onion',
                    quantity: 100,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/onion_1f9c5.png'
                },
                {
                    name: 'Garlic',
                    quantity: 3,
                    measurementUnit: 'cloves',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/garlic_1f9c4.png'
                },
                {
                    name: 'Olive Oil',
                    quantity: 2,
                    measurementUnit: 'tbsp',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/oil-drum_1f6e2-fe0f.png'
                },
                {
                    name: 'Vegetable Broth',
                    quantity: 500,
                    measurementUnit: 'ml',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/pot-of-food_1f372.png'
                },
                {
                    name: 'Basil',
                    quantity: 10,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/herb_1f33f.png'
                },
                {
                    name: 'Parmesan Cheese',
                    quantity: 20,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png'
                }
            ]
        },
        {
            name: 'Lemon Cheesecake',
            description: 'Refreshing and creamy lemon cheesecake with a buttery biscuit base, topped with whipped cream and lemon zest.',
            difficulty: 'Medium',
            preparation_time: 45,
            userId: 7, // Asegurate que exista
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/foodiesfeed.com_refreshing-lemon-cheesecake-slice-with-mint-garnish.jpg', // 👉 subí esta imagen a tu blob
            instructions: [
                { stepNumber: '1', description: 'Prepare the biscuit base by crushing biscuits and mixing with melted butter. Press into a cake tin.' },
                { stepNumber: '2', description: 'Beat the cream cheese, sugar, lemon juice, and lemon zest until smooth.' },
                { stepNumber: '3', description: 'Whip the cream and fold into the cheesecake mixture.' },
                { stepNumber: '4', description: 'Pour over the biscuit base and refrigerate until set.' },
                { stepNumber: '5', description: 'Top with whipped cream, extra lemon zest, and mint leaves before serving.' }
            ],
            recipeTypes: ['Dessert'],
            ingredients: [
                {
                    name: 'Cream Cheese',
                    quantity: 300,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/cheese-wedge_1f9c0.png'
                },
                {
                    name: 'Sugar',
                    quantity: 150,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/candy_1f36c.png'
                },
                {
                    name: 'Lemon',
                    quantity: 2,
                    measurementUnit: 'units',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/lemon_1f34b.png'
                },
                {
                    name: 'Whipped Cream',
                    quantity: 150,
                    measurementUnit: 'ml',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/cupcake_1f9c1.png'
                },
                {
                    name: 'Digestive Biscuits',
                    quantity: 200,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/cookie_1f36a.png'
                },
                {
                    name: 'Butter',
                    quantity: 100,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/butter_1f9c8.png'
                },
                {
                    name: 'Mint',
                    quantity: 5,
                    measurementUnit: 'g',
                    imageUrl: 'https://em-content.zobj.net/source/apple/391/herb_1f33f.png'
                }
            ]
        },
        {
            name: 'Cooked Seafoods',
            description: 'A delicious seafood noodle soup with shrimp, quail eggs, and fresh herbs.',
            difficulty: 'Medium',
            preparation_time: 25,
            userId: 7,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/cooked-seafood.jpeg', // subí esta imagen a tu blob
            instructions: [
                { stepNumber: '1', description: 'Boil the seafood in seasoned water.' },
                { stepNumber: '2', description: 'Prepare the noodles as directed.' },
                { stepNumber: '3', description: 'Combine seafood, quail eggs, and broth.' },
                { stepNumber: '4', description: 'Garnish with fresh herbs and chili.' }
            ],
            recipeTypes: ['Dinner', 'Spicy', 'Low-Calorie'],
            ingredients: [
                { name: 'Shrimp', quantity: 200, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/shrimp_1f990.png' },
                { name: 'Quail Egg', quantity: 5, measurementUnit: 'units', imageUrl: 'https://em-content.zobj.net/source/apple/391/egg_1f95a.png' },
                { name: 'Rice Noodles', quantity: 150, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/spaghetti_1f35d.png' },
                { name: 'Chili Pepper', quantity: 1, measurementUnit: 'unit', imageUrl: 'https://em-content.zobj.net/source/apple/391/hot-pepper_1f336-fe0f.png' }
            ]
        },
        {
            name: 'Pancakes',
            description: 'Fluffy pancakes stacked with fresh berries and orange slices, perfect for breakfast.',
            difficulty: 'Easy',
            preparation_time: 20,
            userId: 7,
            imageUrl: 'https://chefcito.blob.core.windows.net/photos/pancakes.webp', // subí esta imagen a tu blob
            instructions: [
                { stepNumber: '1', description: 'Mix the pancake batter until smooth.' },
                { stepNumber: '2', description: 'Cook pancakes on a hot griddle until golden.' },
                { stepNumber: '3', description: 'Stack the pancakes and top with berries and orange slices.' }
            ],
            recipeTypes: ['Breakfast', 'Dessert'],
            ingredients: [
                { name: 'Flour', quantity: 200, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/bagel_1f96f.png' },
                { name: 'Milk', quantity: 250, measurementUnit: 'ml', imageUrl: 'https://em-content.zobj.net/source/apple/391/glass-of-milk_1f95b.png' },
                { name: 'Strawberry', quantity: 50, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/strawberry_1f353.png' },
                { name: 'Blueberry', quantity: 30, measurementUnit: 'g', imageUrl: 'https://em-content.zobj.net/source/apple/391/blueberries_1fad0.png' },
                { name: 'Orange', quantity: 1, measurementUnit: 'unit', imageUrl: 'https://em-content.zobj.net/source/apple/391/tangerine_1f34a.png' }
            ]
        }
    ];

    try {
        for (const recipeData of recipesData) {
            console.log(`🚀 Checking if recipe "${recipeData.name}" already exists...`);

            const existingRecipe = await prisma.recipe.findFirst({
                where: { name: recipeData.name }
            });

            if (existingRecipe) {
                console.log(`⚠️ Recipe "${recipeData.name}" already exists. Skipping creation.`);
                continue; // 🔥 Saltea esta receta
            }

            console.log(`🚀 Preparing ingredients for "${recipeData.name}"...`);

            const preparedIngredients = [];

            for (const ingredient of recipeData.ingredients) {
                let existingIngredient = await prisma.ingredients.findFirst({
                    where: { name: ingredient.name }
                });

                if (!existingIngredient) {
                    console.warn(`⚠️ Ingredient "${ingredient.name}" not found. Creating it...`);

                    existingIngredient = await prisma.ingredients.create({
                        data: {
                            name: ingredient.name,
                            type: 'General'
                        }
                    });

                    const emojiUrl = ingredient.imageUrl || generateEmojiUrl(ingredient.name);

                    await prisma.ingredient_Image.create({
                        data: {
                            url: emojiUrl,
                            ingredientId: existingIngredient.id
                        }
                    });

                    console.log(`🖼️ Image assigned to new ingredient "${ingredient.name}".`);
                }

                preparedIngredients.push({
                    id: existingIngredient.id,
                    quantity: ingredient.quantity,
                    measurementUnit: ingredient.measurementUnit
                });
            }

            console.log(`✅ Ingredients ready for "${recipeData.name}".`);

            // Create recipe image
            const recipeImage = await prisma.image.create({
                data: { url: recipeData.imageUrl }
            });

            // Create the recipe
            const recipe = await prisma.recipe.create({
                data: {
                    name: recipeData.name,
                    description: recipeData.description,
                    difficulty: recipeData.difficulty,
                    preparation_time: recipeData.preparation_time,
                    UserId: recipeData.userId,
                    imageId: recipeImage.id
                }
            });

            console.log(`✅ Recipe "${recipe.name}" created.`);

            // Create instructions
            for (const instruction of recipeData.instructions) {
                await prisma.instructions.create({
                    data: {
                        id_recipe: recipe.id,
                        steps_numerations: instruction.stepNumber,
                        Description: instruction.description
                    }
                });
            }

            console.log(`✅ Instructions for "${recipe.name}" added.`);

            // Assign recipe types
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

            console.log(`✅ Recipe types assigned to "${recipe.name}".`);

            // Associate ingredients
            for (const ingredient of preparedIngredients) {
                await prisma.recipe_Ingredient.create({
                    data: {
                        id_recipe: recipe.id,
                        id_ingredient: ingredient.id,
                        measurement_unit: ingredient.measurementUnit,
                        quantity: ingredient.quantity
                    }
                });
            }

            console.log(`✅ Ingredients linked to "${recipe.name}".`);
        }
    } catch (error) {
        console.error('❌ Error while creating recipes:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();