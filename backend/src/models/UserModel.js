const Address = require('../database/models/address');
const User = require('../database/models/user');

const checkIfUserAlreadyExists = async (CPF) => {
  const existingUser = await User.findOne({ where: { CPF } });

  if (existingUser) throw new Error('User already exists');
};

module.exports = {
  createUser: async (infos) => {
    const { name, lastName, age, CPF, email, password } = infos;
    await checkIfUserAlreadyExists(CPF);

    const newUser = await User.create({
      name,
      lastName,
      age,
      CPF,
      email,
      password,
    });

    return newUser;
  },

  getAllUsers: async () =>
    User.findAll({ attributes: { excludes: 'password' } }),

  findOneUser: async (id) =>
    User.findByPk(id, { include: { attributes: { excludes: 'password' } } }),

  updateUser: async (id, infos) => {
    await User.update(infos, { where: id });
    const updatedUser = await User.findByPk(id, {
      include: {
        model: Address,
        as: 'address',
        attributes: { exclude: 'password' },
      },
    });
    return updatedUser;
  },
  deleteUser: async (id) => User.destroy({ where: id }),
};
