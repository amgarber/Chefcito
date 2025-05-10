const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

// ✅ ADD INGREDIENTS
const addIngredientsToList = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { name, ingredients } = req.body;

    if (!token) return res.status(401).json({ message: 'Token requerido' });
    if (!name || !ingredients || !Array.isArray(ingredients)) {
        return res.status(400).json({ message: 'Datos inválidos' });
    }

    let userId;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }

    try {
        // Buscar o crear lista
        let shoppingList = await prisma.shopping_List.findFirst({
            where: { id_user: userId, name }
        });

        if (!shoppingList) {
            shoppingList = await prisma.shopping_List.create({
                data: {
                    id_user: userId,
                    name
                }
            });
        }

        // Agregar ingredientes
        for (const ingredient of ingredients) {
            await prisma.shopping_List_Ingredient.upsert({
                where: {
                    id_ShoppingList_id_Ingredients: {
                        id_ShoppingList: shoppingList.id,
                        id_Ingredients: ingredient.id
                    }
                },
                update: {
                    quantity: ingredient.quantity,
                    bought: false
                },
                create: {
                    id_ShoppingList: shoppingList.id,
                    id_Ingredients: ingredient.id,
                    quantity: ingredient.quantity,
                    bought: false
                }
            });
        }

        res.status(200).json({ message: 'Ingredientes agregados con éxito' });
    } catch (error) {
        console.error("❌ Error al agregar a la lista:", error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// ✅ GET SHOPPING LISTS
const getShoppingLists = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token requerido' });

    let userId;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }

    try {
        const lists = await prisma.shopping_List.findMany({
            where: { id_user: userId },
            include: {
                ingredients: {
                    include: {
                        ingredient: true
                    }
                }
            }
        });

        const formatted = lists.map(list => ({
            id: list.id,
            name: list.name,
            ingredients: list.ingredients.map(item => ({
                id: item.id_Ingredients,
                name: item.ingredient.name,
                quantity: item.quantity,
                bought: item.bought
            }))
        }));

        res.json(formatted);
    } catch (err) {
        console.error("❌ Error al obtener listas:", err);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const toggleBoughtStatus = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token requerido' });

    let userId;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }

    const { listId, ingredientId, bought } = req.body;

    try {
        const list = await prisma.shopping_List.findUnique({
            where: { id: listId },
        });

        if (!list || list.id_user !== userId) {
            return res.status(403).json({ message: "No autorizado" });
        }

        const updated = await prisma.shopping_List_Ingredient.update({
            where: {
                id_ShoppingList_id_Ingredients: {
                    id_ShoppingList: listId,
                    id_Ingredients: ingredientId
                }
            },
            data: { bought }
        });

        res.json(updated);
    } catch (err) {
        console.error("❌ Error al actualizar 'bought':", err);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


module.exports = {
    addIngredientsToList,
    getShoppingLists,
    toggleBoughtStatus
};
