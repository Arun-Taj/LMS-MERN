


//update role to educator
// export const updateToEducatorRole=async(req,res)=>{
//     try{
//         const userId=req.auth.userId

//         res.json({success:true, message:'you can publish courses now'})
//     }
    
//     catch(error){
//         res.json({success:false,message:error.message})

//     }
// }

// controllers/authController.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Helper to generate JWT with updated role payload
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

exports.becomeEducator = async (req, res) => {
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
