const userService = require('../services/UserService');

module.exports = {
  create: async (req, res) => {
    const { name, lastName, age, cpf, email, password,  fatherName, motherName, address } = req.body;

    if ( !name || !lastName || !age || !cpf || !email || !password || !address) {
      throw new Error('Missing fieds');
    }
    
    const newUser = await userService.create({ name, lastName, age, cpf, email, password, fatherName, motherName, address });

    return res.status(201).json(newUser);
  },

  readAll: async (_req, res) => {
    const allUsers = await userService.readAll();

    return res.status(200).json(allUsers);
  },

  readOne: async (req, res) => {
    const { id } = req.params;

    if (!id) throw new Error('Missing params');

    const specificUser = await userService.readOne(id);

    return res.status(200).json(specificUser);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, lastName, age, cpf, email, password } = req.body;

    if ( !name || !lastName || !age || !cpf || !email || !password) {
      throw new Error('Missing fieds');
    }

    if (!id) throw new Error('Missing params');

    const updatedUser = await userService(id, { name, lastName, age, cpf, email, password });

    return res.status(200).json(updatedUser);
  },
  
  delete: async (req, res) => {
    const { id } = req.params;

    if (!id) throw new Error('Missing params');

    await userService.delete(id);
    
    return res.status(200).json({ message: 'User deleted' });
  },
};
