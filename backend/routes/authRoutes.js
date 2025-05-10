const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const { register, login, updateUser, getUserProfile} = require('../controllers/authController');

const router = express.Router();

router.post('/register', upload.single('picture'), register);
router.post('/login', login);
router.put('/edit-profile', updateUser);
router.get('/user-profile', getUserProfile);


module.exports = router;
