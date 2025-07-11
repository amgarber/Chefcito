const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { register, login, updateUser, getUserProfile} = require('../controllers/authController');
const router = express.Router();
const googleAuthController = require('../controllers/googleAuthController');



router.post('/register', upload.single('picture'), register);
router.post('/login', login);
router.put('/edit-profile', updateUser);
router.get('/user-profile', getUserProfile);
router.post('/google-login', googleAuthController.googleLogin);



module.exports = router;
