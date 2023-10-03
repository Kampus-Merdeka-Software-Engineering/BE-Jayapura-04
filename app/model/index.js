const sequelize = require('sequelize');
const mysql = require('mysql2');

const connection = new sequelize.Sequelize('railway', 'root', 'joopjoergenihbos29', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    port: 3306
});

module.exports = connection;
