import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Ensure User model uses ES modules

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Not authorized' });
  }
};

export const requireRole = (requiredRole) => {
  return async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user from the database to get the latest roles
      const user = await User.findById(decoded.id);

      if (!user || !user.role.includes(requiredRole)) {
        return res.status(403).json({ message: 'Access denied' });
      }

      req.user = user; // Attach the full user object to req.user
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
};