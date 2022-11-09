const loginService = require('../services/loginService');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const token = await loginService.validateLogin({ email, password });

    return res.status(200).json(token);
  }
};