const express = require('express');
const router = express.Router();
const emailApproval = require('../controllers/emailApprovalController');

router.get('/email/request/:token/approve', emailApproval.handleApprove);
router.get('/email/request/:token/reject', emailApproval.handleReject);

module.exports = router;
