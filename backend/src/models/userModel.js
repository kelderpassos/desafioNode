const { User, Address } = require('../database/models');

const checkIfUserAlreadyExists = async (cpf) => {
  const existingUser = await User.findOne({ where: { cpf } });

  if (existingUser) throw new Error('User already exists');
};

module.exports = {
  create: async (infos) => {
    const { name, lastName, age, cpf, email, fatherName, motherName, address } =
      infos;
    await checkIfUserAlreadyExists(cpf);

    const { id } = await User.create(infos);
    await Address.create({ ...address, userId: id });

    return { id, name, lastName, age, cpf, email, fatherName, motherName };
  },

  readAll: async () => User.findAll({ attributes: { exclude: 'password' } }),

  readOne: async (id) =>
    User.findByPk(id, { attributes: { exclude: 'password' } }),

  update: async (id, infos) => {
    await User.update(infos, { where: { id } });

    return User.findByPk(id, { attributes: { exclude: 'password' } });
  },

  delete: async (id) => User.destroy({ where: { id } }),
};
