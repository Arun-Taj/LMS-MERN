import User from '../models/User.js'; // Assuming User model is now using ES modules
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { name, email, password, imageUrl } = req.body;
    const user = await User.create({ name, email, password, imageUrl });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({ token, user: { id: user._id, name, email, imageUrl } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({ token, user: { id: user._id, name: user.name, email, role: user.role } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getMe = async (req, res) => {
  res.json(req.user);
};

// PUT /api/users/become-educator
export const becomeEducator = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user.role.includes('educator')) {
      user.role.push('educator');
      await user.save();
    }

    res.json({ message: 'You are now an educator', role: user.role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};