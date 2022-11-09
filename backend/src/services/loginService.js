const userModel = require('../models/userModel');
const auth = require('../utils/auth');
const bcrypt = require('bcryptjs');

const ErrorHandler = require('../utils/ErrorHandler');

module.exports = {
  validateLogin: async ({ email, password }) => {
    const user = await userModel.findByEmail(email);

    if (!user) throw new Error('User not found');
    if (!bcrypt.compareSync(password, user.password)) throw new Error('Invalid Password');

    if (!user) throw new ErrorHandler(404, 'User not found');
    if (user.password !== password) throw new ErrorHandler(401, 'Invalid Password');

    return auth.createToken({ id: user.id, email: user.email });
  }
}