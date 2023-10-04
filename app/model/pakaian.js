const connection = require('./index')
const sequelize = require('sequelize')

const pakaian = connection.define("pakaian", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama: {type: sequelize.DataTypes.STRING},
    jenis: {type: sequelize.DataTypes.STRING},
    harga: {type: sequelize.DataTypes.DECIMAL},
    gambar: {type: sequelize.DataTypes.TEXT},
    rating: {type: sequelize.DataTypes.INTEGER},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = pakaian