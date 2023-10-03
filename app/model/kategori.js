const connection = require('./index')
const sequelize = require('sequelize')

const kategori = connection.define("kategori", {
    ProductID: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    name: {type: sequelize.DataTypes.VARCHAR},
    img: {type: sequelize.DataTypes.TEXT},
    harga: {type: sequelize.DataTypes.DECIMAL},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = kategori