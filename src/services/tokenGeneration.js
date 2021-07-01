const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (userData) => {

  const jwtConfig = {
    expiresIn: '3h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: userData }, secret, jwtConfig);

  return token;
};
