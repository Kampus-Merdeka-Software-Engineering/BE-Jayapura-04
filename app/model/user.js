const sequelize = require('sequelize');
const connection = require('./index');

const User = connection.define("user", {
    PersonID: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    NamaLengkap: { type: sequelize.DataTypes.VARCHAR },
    email: { type: sequelize.DataTypes.VARCHAR },
    password: { type: sequelize.DataTypes.VARCHAR },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = User;


