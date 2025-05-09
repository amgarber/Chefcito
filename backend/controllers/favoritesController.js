const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client') ;


const prisma = new PrismaClient();


const toggleFavorite = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token requerido' });

    const token = authHeader.split(' ')[1];
    let userId;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }

    const { recipeId } = req.body;
    if (!recipeId) return res.status(400).json({ message: 'Falta el ID de la receta' });

    try {
        const existing = await prisma.favourite.findUnique({
            where: {
                id_user_id_recipe: {
                    id_user: userId,
                    id_recipe: recipeId,
                },
            },
        });

        if (existing) {
            await prisma.favourite.delete({
                where: {
                    id_user_id_recipe: {
                        id_user: userId,
                        id_recipe: recipeId,
                    },
                },
            });
            return res.json({ favorite: false });
        } else {
            await prisma.favourite.create({
                data: {
                    id_user: userId,
                    id_recipe: recipeId,
                },
            });
            return res.json({ favorite: true });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

const isFavorite = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({message: 'Token requerido'});

    const token = authHeader.split(' ')[1];
    let userId;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({message: 'Token inválido'});
    }

    const recipeId = parseInt(req.params.recipeId);

    try {
        const favorite = await prisma.favourite.findUnique({
            where: {
                id_user_id_recipe: {
                    id_user: userId,
                    id_recipe: recipeId,
                },
            },
        });

        res.json({favorite: !!favorite});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Error al verificar favorito'});
    }
};

    const getAllFavorites = async (req, res) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({message: 'Token requerido'});

        const token = authHeader.split(' ')[1];
        let userId;

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            userId = decoded.userId;
        } catch (err) {
            return res.status(403).json({message: 'Token inválido'});
        }

        try {
            const favorites = await prisma.favourite.findMany({
                where: {id_user: userId},
                include: {
                    recipe: {
                        include: {image: true}
                    }
                }
            });

            const formatted = favorites.map(fav => ({
                id: fav.recipe.id,
                name: fav.recipe.name,
                imageUrl: fav.recipe.image?.url,
                description: fav.recipe.description,
                difficulty: fav.recipe.difficulty,
                preparationTime: fav.recipe.preparation_time
            }));

            res.json(formatted);
        } catch (err) {
            console.error(err);
            res.status(500).json({message: 'Error obteniendo favoritos'});
        }
    };
const deleteFavorite = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token requerido' });

    const token = authHeader.split(' ')[1];
    let userId;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }

    const recipeId = parseInt(req.params.id);
    console.log('🔍 Intentando borrar favorito:', { userId, recipeId });

    try {
        const exists = await prisma.favourite.findUnique({
            where: {
                id_user_id_recipe: {
                    id_user: userId,
                    id_recipe: recipeId
                }
            }
        });

        if (!exists) {
            console.log('🚫 No se encontró el favorito en la base de datos');
            return res.status(404).json({ message: 'No se encontró el favorito' });
        }

        await prisma.favourite.delete({
            where: {
                id_user_id_recipe: {
                    id_user: userId,
                    id_recipe: recipeId
                }
            }
        });

        console.log('✅ Favorito eliminado');
        res.status(200).json({ message: 'Favorito eliminado' });
    } catch (error) {
        console.error('❌ Error al eliminar favorito:', error);
        res.status(500).json({ error: 'Error en el servidor al eliminar favorito' });
    }
};

    module.exports = {
        toggleFavorite,
        isFavorite,
        getAllFavorites,
        deleteFavorite
    };




