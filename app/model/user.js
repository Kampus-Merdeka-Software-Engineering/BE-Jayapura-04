const sequelize = require('sequelize');
const connection = require('./index');

const User = connection.define("user", {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    namalengkap: { type: sequelize.DataTypes.VARCHAR },
    email: { type: sequelize.DataTypes.VARCHAR },
    password: { type: sequelize.DataTypes.VARCHAR },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = User;


