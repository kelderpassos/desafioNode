const AddressModel = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    userId: DataTypes.INTEGER,
    addressNumber: DataTypes.INTEGER,
    addressName: DataTypes.STRING,
    addressType: DataTypes.INTEGER,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'addresses',
    underscored: true,
  });

  return Address;
};

module.exports = AddressModel;