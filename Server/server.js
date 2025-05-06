import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/Routes.js'; // Update import
import courseRoutes from './routes/Routes.js'; // Assuming you created this as ESM
import connectCloudinary from './config/cloudinary.js'; // Assuming this is also ESM



const app = express();

// Initialize Cloudinary
connectCloudinary();

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));



// Middlewares
app.use(cors({
  credentials: true,
  origin: [
    'http://localhost:5173', 
    'https://lms-mern-phi.vercel.app/'
  ]
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
// app.use('/become-educator',authRoutes)
app.use('/api', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("JWT_EXPIRES_IN:", process.env.JWT_EXPIRES_IN);