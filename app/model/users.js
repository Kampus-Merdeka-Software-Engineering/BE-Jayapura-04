const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  namaLengkap: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
}, {
  tableName: 'users', 
  timestamps: false
});

module.exports = User;


