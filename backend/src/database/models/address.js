const sequelize = require('sequelize');
const database = require('../db');

class Address extends sequelize.Model {}

Address.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
    },
    addressNumber: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    addressName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    addressType: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    complement: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    neighborhood: {
      type: sequelize.STRING,
      allowNull: false,
    },
    zipCode: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    city: {
      type: sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: sequelize.DATE,
      allowNull: false,
    },
    country: {
      type: sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: 'AddressTable',
    timestamps: false,
  }
);

module.exports = Address;
