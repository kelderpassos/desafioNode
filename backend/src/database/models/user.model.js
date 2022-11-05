const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    CPF: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Address, { foreignKey: 'id', as: 'address'})
  }

  return User;
};

module.exports = UserModel;