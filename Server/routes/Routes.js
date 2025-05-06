// Routes.js
import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/auth.js'; // Assuming auth.js is using ESM
import { signup, login, getMe } from '../controllers/authController.js'; // Assuming authController.js is using ESM
import { becomeEducator, addCourse } from '../controllers/educatorController.js'; // Assuming educatorController.js is using ESM

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);
// New Educator Role Upgrade Route
router.put('/become-educator', protect, becomeEducator);
router.post('/courses', protect, addCourse); // Changed endpoint to '/courses' for consistency

export default router;