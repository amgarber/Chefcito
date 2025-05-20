const express = require('express');
const router = express.Router();
const approvalController = require('../controllers/approvalController');
const {makePrivate} = require("../controllers/approvalController");

// Usuario solicita publicación de receta
router.post('/recipes/:id/request-approval', approvalController.requestApproval);

// Admin obtiene todas las solicitudes pendientes
router.get('/admin/requests', approvalController.getPendingRequests);

// Admin aprueba una solicitud
router.patch('/admin/requests/:id/approve', approvalController.approveRequest);

// Admin rechaza una solicitud
router.patch('/admin/requests/:id/reject', approvalController.rejectRequest);

router.get('/users/:id/approval-status', approvalController.getUserNotifications);


module.exports = router;
