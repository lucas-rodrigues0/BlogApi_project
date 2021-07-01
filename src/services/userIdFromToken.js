const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const userIdFromToken = (token) => {
  const decoded = jwt.decode(token, secret);
  const userId = decoded.data.id;

  return userId;
};

module.exports = { userIdFromToken };
