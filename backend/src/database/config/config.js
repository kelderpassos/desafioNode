require('dotenv').config();

const config = {
  username: 'sa',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};