const sequelize = require('sequelize')

const connection = new sequelize.Sequelize('railway', 'root', 'g3rvoxHERUtrJFQXIp24', {
    host: 'containers-us-west-201.railway.app',
    dialect: 'mysql',
    logging: false,
    port: 5547
})

module.exports = connection