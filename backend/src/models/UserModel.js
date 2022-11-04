const Address = require('../database/models/address');
const User = require('../database/models/user');

const checkIfUserAlreadyExists = async (CPF) => {
  const existingUser = await User.findOne({ where: { CPF } });

  if (existingUser) throw new Error('User already exists');
};

module.exports = {
  create: async (infos) => {
    const { CPF } = infos;
    await checkIfUserAlreadyExists(CPF);

    return User.create(infos);
  },

  readAll: async () =>
    User.findAll({ attributes: { excludes: 'password' } }),

  readOne: async (id) =>
    User.findByPk(id, { include: { attributes: { excludes: 'password' } } }),

  update: async (id, infos) => {
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

  delete: async (id) => User.destroy({ where: id }),
};
