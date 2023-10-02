const connection = require('./index');
const sequelize = require('sequelize');

const signup = connection.define("signup", {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    namaLengkap: { type: sequelize.DataTypes.TEXT },
    email: { type: sequelize.DataTypes.TEXT },
    password: { type: sequelize.DataTypes.TEXT },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = signup;

