'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
      },
      address_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      underscored: true,
      timestamps: false,
    });    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');    
  }
};