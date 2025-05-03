const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const { signup, login, getMe,becomeEducator } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);
// New Educator Role Upgrade Route
router.put('/become-educator', protect, becomeEducator);
module.exports = router;