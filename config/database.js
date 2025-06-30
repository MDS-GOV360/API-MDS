const { Sequelize } = require('sequelize');
require('dotenv').config();

// Verifique se as variáveis de ambiente necessárias estão configuradas
if (!process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_HOST || !process.env.DB_PORT || !process.env.DB_DATABASE) {
  throw new Error('Faltando variáveis de ambiente no arquivo .env');
}

const sequelize = new Sequelize(
  process.env.DB_DATABASE, 
  process.env.DB_USERNAME, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
