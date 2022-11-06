const userModel = require('../models/userModel');

module.exports = {
  validateLogin: async ({ email, password }) => {
    const user = userModel.checkIfUserAlreadyExists()
  }
}