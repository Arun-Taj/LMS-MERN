const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // _id:{
  //   type:String,
  //   required:true,
  // },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  imageUrl:{
      type:String,
      required:true,
  },
  enrolledCourses:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Course'
    }
  ],
  role: {
    type: [String],
    enum: ['user', 'educator'],
    default: ['user']
  }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);