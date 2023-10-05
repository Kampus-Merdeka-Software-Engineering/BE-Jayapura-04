const connection = require('./index')
const sequelize = require('sequelize')

const bantuan = connection.define("bantuan", {
    id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: {type: sequelize.DataTypes.STRING},
    email: {type: sequelize.DataTypes.STRING},
    question: {type: sequelize.DataTypes.STRING},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = bantuan