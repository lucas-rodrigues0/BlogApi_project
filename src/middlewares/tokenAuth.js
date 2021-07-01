const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decoded = jwt.decode(token, secret);
  if (!decoded) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};
