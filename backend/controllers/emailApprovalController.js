const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const mailer = require('../NodeMailer/mailer');

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

    // Enviar mail al usuario
    await mailer.sendApprovalResult(
        updated.solicitor.username,
        updated.solicitor.email,
        updated.recipe.name || 'Untitled',
        approve
    );

    return updated;
}

exports.handleApprove = async (req, res) => {
    const token = req.params.token;
    const updated = await _resolveRequest(token, true);

    if (!updated) return res.status(400).send("⛔ Link inválido o expirado.");

    res.redirect("http://localhost:3000?status=approved");
};

exports.handleReject = async (req, res) => {
    const token = req.params.token;
    const updated = await _resolveRequest(token, false);

    if (!updated) return res.status(400).send("⛔ Link inválido o expirado.");

    res.redirect("http://localhost:3000?status=rejected");
};
