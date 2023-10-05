const sequelize = require('sequelize');
const connection = require('./index');

const ulasan = connection.define("ulasan", {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: sequelize.DataTypes.STRING },
    rating: { type: sequelize.DataTypes.STRING },
    ulasan: { type: sequelize.DataTypes.STRING },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = ulasan