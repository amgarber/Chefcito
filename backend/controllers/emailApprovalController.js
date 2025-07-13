const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const mailer = require('../NodeMailer/mailer');
const jwt = require('jsonwebtoken');

// Función común para aprobar o rechazar la solicitud
async function _resolveRequest(token, approve) {
    const request = await prisma.approval_Request.findUnique({
        where: { emailToken: token },
        include: {
            recipe: true,
            solicitor: true
        }
    });

    if (
        !request ||
        request.status !== 'PENDING' ||
        request.tokenExpires < new Date()
    ) {
        return null;
    }

    const newStatus = approve ? 'APPROVED' : 'REJECTED';

    const updated = await prisma.approval_Request.update({
        where: { id_solicitation: request.id_solicitation },
        data: {
            status: newStatus,
            recipe: approve
                ? {
                    update: {
                        Approval_Status: 'APPROVED',
                        Privacy_settings: 'PUBLIC'
                    }
                }
                : undefined
        },
        include: {
            recipe: true,
            solicitor: true
        }
    });

    // Notificar al solicitante
    await mailer.sendApprovalResult(
        updated.solicitor.username,
        updated.solicitor.email,
        updated.recipe.name || 'Untitled',
        approve
    );

    return updated;
}

//  Validación de token y rol === ADMIN
function validateAdmin(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "⚠️ No autorizado" });
        return null;
    }

    const tokenJWT = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(tokenJWT, process.env.JWT_SECRET);
        if (decoded.role !== "ADMIN") {
            res.status(403).json({ message: "❌ Solo un ADMIN puede aprobar o rechazar recetas" });
            return null;
        }
        return decoded;
    } catch (err) {
        res.status(401).json({ message: "⚠️ Token inválido" });
        return null;
    }
}


exports.handleApprove = async (req, res) => {
    const valid = validateAdmin(req, res);
    if (!valid) return;

    const token = req.params.token;
    const updated = await _resolveRequest(token, true);

    if (!updated) {
        return res.status(400).json({ message: "⛔ Link inválido o expirado." });
    }

    res.json({ message: "✅ Receta aprobada correctamente", recipeId: updated.recipe.id });
};

// 👇 Rechazo
exports.handleReject = async (req, res) => {
    const valid = validateAdmin(req, res);
    if (!valid) return;

    const token = req.params.token;
    const updated = await _resolveRequest(token, false);

    if (!updated) {
        return res.status(400).json({ message: "⛔ Link inválido o expirado." });
    }

    res.json({ message: "❌ Receta rechazada correctamente", recipeId: updated.recipe.id });
};