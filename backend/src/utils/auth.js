const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

module.exports = {
  createToken: (payload) =>
    jwt.sign({ payload }, SECRET, { expiresIn: '1d', algorithm: 'HS256' }),

  validateToken: (token = null) => {
    if (!token) throw new Error('Token not provided');

    try {
      return jwt.verify(token, SECRET);
    } catch (error) {
      throw new Error('Invalid or Expired token');
    }
  },
};
