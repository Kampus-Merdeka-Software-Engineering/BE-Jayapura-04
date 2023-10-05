const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  namaLengkap: { type: DataTypes.TEXT },
  email: { type: DataTypes.TEXT },
  password: { type: DataTypes.TEXT },
}, {
  tableName: 'users', // Nama tabel dalam database
  timestamps: false
});

module.exports = User;


