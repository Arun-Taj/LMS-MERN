

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/Routes');
// const { cloudinary, connectCloudinary } = require('./config/cloudnary');
const app = express();

// Initialize Cloudinary
// connectCloudinary();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("JWT_EXPIRES_IN:", process.env.JWT_EXPIRES_IN);