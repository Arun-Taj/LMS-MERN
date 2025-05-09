// routes/courses.js
import express from 'express';
import { protect, requireRole } from '../middlewares/auth.js';
import { addCourse } from '../controllers/educatorController.js';
import upload from '../config/multer.js';

const router = express.Router();

// Note: path is '/' here, we'll mount it under '/api/courses' in server.js
router.post(
  '/',
  protect,
  requireRole('educator'),
  upload.single('courseThumbnail'),
  addCourse
);

export default router;
