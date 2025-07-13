const express = require('express');
const router = express.Router();
const approvalController = require('../controllers/approvalController');
const {makePrivate, getRequestsByUser} = require("../controllers/approvalController");

// Usuario solicita publicación de receta
router.post('/recipes/:id/request-approval', approvalController.requestApproval);

// Admin obtiene todas las solicitudes pendientes
router.get('/admin/requests', approvalController.getPendingRequests);

// Admin aprueba una solicitud
router.patch('/admin/requests/:id/approve', approvalController.approveRequest);

// Admin rechaza una solicitud
router.patch('/admin/requests/:id/reject', approvalController.rejectRequest);

router.get('/users/:id/approval-status', approvalController.getUserNotifications);


router.get('/users/:userId/requests', getRequestsByUser);

router.get('/admin/recipe/:id', approvalController.getRecipeAsAdmin);

// Marcar una notificación como leída
router.patch('/notifications/:id/read', approvalController.markNotificationAsRead);

// Marcar todas como leídas para un usuario
router.patch('/notifications/read-all/:userId', approvalController.markAllNotificationsAsRead);

router.patch('/notifications/mark-all-unread/:userId', approvalController.markAllNotificationsAsUnread);


module.exports = router;
