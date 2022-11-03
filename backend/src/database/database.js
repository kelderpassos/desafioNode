const sequelize = require('sequelize');
require('dotenv').config();

const database = new sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, 
{ dialect: process.env.DIALECT, host: process.env.HOST, port: process.env.PORT });

database.sync();

module.exports = database;