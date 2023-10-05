const connection = require('./index')
const sequelize = require('sequelize')

const pakaian = connection.define("pakaian", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    name: {type: sequelize.DataTypes.STRING},
    type: {type: sequelize.DataTypes.STRING},
    price: {type: sequelize.DataTypes.DECIMAL},
    img: {type: sequelize.DataTypes.STRING},
    rating: {type: sequelize.DataTypes.INTEGER},
    colors: {type: sequelize.DataTypes.STRING},
    sizes: {type: sequelize.DataTypes.STRING},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = pakaian