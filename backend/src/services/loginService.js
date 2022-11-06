const userModel = require('../models/userModel');
const auth = require('../utils/auth');

module.exports = {
  validateLogin: async ({ email, password }) => {
    const user = await userModel.findByEmail(email);

    if (!user) throw new Error('User not found');
    if (user.password !== password) throw new Error('Invalid Password');

    return auth.createToken({ id: user.id, email: user.email });
  }
}