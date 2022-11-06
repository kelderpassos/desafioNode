const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

module.exports = {
  createToken: (payload) =>
    jwt.sign({ payload }, SECRET, { expiresIn: '1d', algorithm: 'HS256' }),

  validateToken: (token = null) => jwt.verify(token, SECRET),
};
