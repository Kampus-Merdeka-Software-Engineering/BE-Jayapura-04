const sequelize = require('sequelize');
const connection = require('./index');

const ulasan = connection.define("ulasan", {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: sequelize.DataTypes.TEXT },
    rating: { type: sequelize.DataTypes.TEXT },
    ulasan: { type: sequelize.DataTypes.TEXT },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = ulasan