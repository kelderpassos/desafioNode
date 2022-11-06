const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    cpf: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    motherName: DataTypes.STRING, 
  }, {
    underscored: true,
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Address, { foreignKey: 'id', as: 'user'})
  }

  return User;
};

module.exports = UserModel;