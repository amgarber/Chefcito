const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

// POST /recipes/:id/request-approval
exports.requestApproval = async (req, res) => {
    const recipeId = parseInt(req.params.id);
    const { userId } = req.body;

    try {
        const recipe = await prisma.recipe.findUnique({
            where: { id: recipeId }
        });

        if (!recipe || recipe.UserId !== userId) {
            return res.status(403).json({ message: "No puedes solicitar aprobación para esta receta." });
        }

        const existing = await prisma.approval_Request.findFirst({
            where: {
                id_recipe: recipeId,
                status: 'PENDING'
            }
        });

        if (existing) {
            return res.status(400).json({ message: "Ya existe una solicitud pendiente para esta receta." });
        }

        const newRequest = await prisma.approval_Request.create({
            data: {
                id_recipe: recipeId,
                id_user_solicitor: userId
            }
        });

        res.status(201).json({ message: "Solicitud enviada al administrador", request: newRequest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al procesar la solicitud" });
    }
};

// GET /admin/requests
exports.getPendingRequests = async (req, res) => {
    try {
        const requests = await prisma.approval_Request.findMany({
            where: { status: 'PENDING' },
            include: {
                recipe: true,
                solicitor: { select: { username: true, email: true } }
            }
        });

        res.json(requests);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al obtener solicitudes" });
    }
};

// PATCH /admin/requests/:id/approve
exports.approveRequest = async (req, res) => {
    const requestId = parseInt(req.params.id);
    const { adminId } = req.body;

    try {
        const updated = await prisma.approval_Request.update({
            where: { id_solicitation: requestId },
            data: {
                status: 'APPROVED',
                id_admin: adminId,
                recipe: {
                    update: {
                        Approval_Status: 'APPROVED',
                        Privacy_settings: 'PUBLIC',
                        id_approval_admin: adminId
                    }
                }
            },
            include: { recipe: true }
        });

        res.json({ message: "Receta aprobada", request: updated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al aprobar solicitud" });
    }
};



// PATCH /admin/requests/:id/approve
exports.approveRequest = async (req, res) => {
    const requestId = parseInt(req.params.id);
    const { adminId } = req.body;

    if (!adminId || isNaN(adminId)) {
        return res.status(400).json({ message: "adminId inválido o no enviado" });
    }


    try {
        const updated = await prisma.approval_Request.update({
            where: { id_solicitation: requestId },
            data: {
                status: 'APPROVED',
                admin: {
                    connect: {id: adminId}
                },
                recipe: {
                    update: {
                        Approval_Status: 'APPROVED',
                        Privacy_settings: 'PUBLIC',
                        id_approval_admin: adminId
                    }
                }
            },
            include: { recipe: true }
        });

        res.json({ message: "Receta aprobada", request: updated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al aprobar solicitud" });
    }
};

// PATCH /admin/requests/:id/reject
exports.rejectRequest = async (req, res) => {
    const requestId = parseInt(req.params.id);
    const { adminId } = req.body;

    try {
        const updated = await prisma.approval_Request.update({
            where: { id_solicitation: requestId },
            data: {
                status: 'REJECTED',
                id_admin: adminId
            },
            include: { recipe: true }
        });

        res.json({ message: "Receta rechazada", request: updated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error al rechazar solicitud" });
    }
};
// controllers/approvalController.js

exports.getUserNotifications = async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const requests = await prisma.approval_Request.findMany({
            where: {
                id_user_solicitor: userId,
                status: {
                    not: 'PENDING'  // Solo mostrar las ya resueltas
                }
            },
            include: {
                recipe: true
            }
        });

        res.json(requests);
    } catch (err) {
        console.error("Error al obtener notificaciones:", err);
        res.status(500).json({ message: "Error al obtener notificaciones" });
    }
};
//para volver a hacer privada una receta que esta publica
exports.makePrivate = async (req, res) => {
    const recipeId = parseInt(req.params.id);

    try {
        const updated = await prisma.recipe.update({
            where: { id: recipeId },
            data: {
                Privacy_settings: 'PRIVATE',
                Approval_Status: 'APPROVED'
            }
        });

        res.json({ message: "Receta marcada como privada", recipe: updated });
    } catch (err) {
        console.error("Error al cambiar a privada:", err);
        res.status(500).json({ message: "Error interno al cambiar visibilidad" });
    }
};

exports.getRequestsByUser = async (req, res) => {
    const userId = parseInt(req.params.userId);

    if (isNaN(userId)) {
        return res.status(400).json({ message: "ID de usuario inválido" });
    }

    try {
        const requests = await prisma.approval_Request.findMany({
            where: {
                id_user_solicitor: userId
            },
            include: {
                recipe: {
                    include: {
                        image: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.json(requests);
    } catch (err) {
        console.error("Error al obtener solicitudes:", err);
        res.status(500).json({ message: "Error interno al obtener las solicitudes" });
    }
};
