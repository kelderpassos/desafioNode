const AddressModel = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    CPF: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
  })

  return Address;
};

module.exports = AddressModel;