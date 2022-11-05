const { User, Address } = require('../database/models/');

const checkIfUserAlreadyExists = async (CPF) => {
  const existingUser = await User.findOne({ where: { CPF } });

  if (existingUser) throw new Error('User already exists');
};

module.exports = {
  create: async (infos) => {
    const { cpf, address } = infos;
    await checkIfUserAlreadyExists(cpf);
    await Address.create(address);

    return User.create(infos);
  },

  readAll: async () => User.findAll({ attributes: { excludes: 'password' } }),

  readOne: async (id) =>
    User.findByPk(id, { includes: { attributes: { excludes: 'password' } } }),

  update: async (id, infos) => {
    await User.update(infos, { where: id });
    const updatedUser = await User.findByPk(id, {
      includes: {
        model: Address,
        as: 'address',
        attributes: { exclude: 'password' },
      },
    });
    return updatedUser;
  },

  delete: async (id) => User.destroy({ where: id }),
};
