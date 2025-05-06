


// //update role to educator
// // export const updateToEducatorRole=async(req,res)=>{
// //     try{
// //         const userId=req.auth.userId

// //         res.json({success:true, message:'you can publish courses now'})
// //     }
    
// //     catch(error){
// //         res.json({success:false,message:error.message})

// //     }
// // }

// // controllers/authController.js

// // const jwt = require('jsonwebtoken');
// // const User = require('../models/User');
// import jwt from 'jsonwebtoken'; // Assuming you might use jwt here or in related functions
// import User from '../models/User.js'; // Ensure User model uses ES modules
// import Course from '../models/courseModel.js'; // Ensure Course model uses ES modules
// import cloudinary from 'cloudinary';
// import fs from 'fs/promises';


// // Helper to generate JWT with updated role payload
// const generateToken = (user) => {
//   return jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRES_IN }
//   );
// };

// export const becomeEducator = async (req, res) => {
//   try {
//     // req.user is set by protect middleware and is a Mongoose document
//     const user = await User.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     // If already an educator, bail out
//     if (user.role.includes('educator')) {
//       return res.status(400).json({
//         success: false,
//         message: 'You already have the educator role',
//       });
//     }

//     // Add educator to roles and save
//     user.role.push('educator');
//     await user.save();

//     // Issue a new token so the front-end has updated role info
//     const token = generateToken(user);

//     res.status(200).json({
//       success: true,
//       message: 'You can now publish courses',
//       data: {
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           imageUrl: user.imageUrl,
//           role: user.role,
//         },
//         token,
//       },
//     });
//   } catch (error) {
//     console.error('becomeEducator error:', error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// //Add new course
// export const addCourse=async(req,res)=>{
//     try{
//         const {courseData}=req.body
//         const imageFile=req.file
//         const educatorId=req.auth.userId
//         if(!imageFile){
//             return res.json({success:false,message:'Thumbnaul Not Attached'})
//         }

//         const parsedCourseData=await JSON.pasrse(courseData)
//         parsedCourseData.educator=educatorId
//         const newCourse=await Course.create(parsedCourseData)
//         const imageUpload=await connectCloudinary.uploader.uplpload(imageFile.path)
//         newCourse.courseThumbnail=imageUpload.secure_url
//         await newCourse.save()

//         res.json({success:true,message:'Course Added'})


//     }
//     catch(error){
//         res.json({success:false,message:error.message})
//     }
// }

// controllers/educatorController.js
import jwt from 'jsonwebtoken'; // Assuming you might use jwt here or in related functions
import User from '../models/User.js'; // Ensure User model uses ES modules
import Course from '../models/Course.js'; // Ensure Course model uses ES modules
import cloudinary from 'cloudinary';
import fs from 'fs/promises';

// Helper to generate JWT with updated role payload
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

export const becomeEducator = async (req, res) => {
  try {
    // req.user is set by protect middleware and is a Mongoose document
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // If already an educator, bail out
    if (user.role.includes('educator')) {
      return res.status(400).json({
        success: false,
        message: 'You already have the educator role',
      });
    }

    // Add educator to roles and save
    user.role.push('educator');
    await user.save();

    // Issue a new token so the front-end has updated role info
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: 'You can now publish courses',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          imageUrl: user.imageUrl,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    console.error('becomeEducator error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//Add new course
export const addCourse = async (req, res) => {
  try {
    const { courseData } = req.body;
    const imageFile = req.file;
    const educatorId = req.user.id; // Assuming user info is attached to req by protect middleware

    if (!imageFile) {
      return res.status(400).json({ success: false, message: 'Thumbnail not attached' });
    }

    let parsedCourseData;
    try {
      parsedCourseData = JSON.parse(courseData);
    } catch (error) {
      return res.status(400).json({ success: false, message: 'Invalid course data format' });
    }

    parsedCourseData.educator = educatorId;

    const newCourse = new Course(parsedCourseData);
    const savedCourse = await newCourse.save();

    try {
      const imageUploadResult = await cloudinary.uploader.upload(imageFile.path);
      savedCourse.courseThumbnail = imageUploadResult.secure_url;
      await savedCourse.save();
      // Optionally remove the local file after upload
      await fs.unlink(imageFile.path);
    } catch (uploadError) {
      console.error('Cloudinary upload error:', uploadError);
      // If upload fails, you might want to delete the course you just saved
      await Course.findByIdAndDelete(savedCourse._id);
      return res.status(500).json({ success: false, message: 'Failed to upload thumbnail' });
    }

    res.status(201).json({ success: true, message: 'Course added successfully', course: savedCourse });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};