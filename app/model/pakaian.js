const connection = require('./index')
const sequelize = require('sequelize')

const pakaian = connection.define("pakaian", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    name: {type: sequelize.DataTypes.STRING},
    type: {type: sequelize.DataTypes.STRING},
    price: {type: sequelize.DataTypes.DECIMAL},
    img: {type: sequelize.DataTypes.TEXT},
    rating: {type: sequelize.DataTypes.INTEGER},
    colors: {type: sequelize.DataTypes.TEXT},
    sizes: {type: sequelize.DataTypes.TEXT},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = pakaian