const dbConfig = require('../../config/dbConfig.js');

const {Sequelize, DataTypes} =require('sequelize')

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      options:{
        enableArithAbort: dbConfig.options.enableArithAbort,
        encrypt: dbConfig.options.encrypt
      },
      pool: {
          max: dbConfig.pool.max,
          min: dbConfig.pool.min,
          idleTimeOutMillis: dbConfig.pool.idleTimeOutMillis,
      }
  }
)

sequelize.authenticate()
.then(() => {
  console.log('connected..')
})
.catch(err => {
  console.log('Error'+ err)
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Service_Data = require('../models/servicesModel/serviceModel.js')(sequelize, DataTypes)
db.Customer_Data = require('../models/customersModel/customerModel.js')(sequelize, DataTypes)
db.Employee_Data = require('../models/employeesModel/employeeModel.js')(sequelize, DataTypes)
db.Category_Data = require('../models/servicesModel/categoryModel.js')(sequelize, DataTypes)
// db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

// Using true will delete all previous data
db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db;
// 1 to Many Relation

// db.products.hasMany(db.reviews, {
//   foreignKey: 'product_id',
//   as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//   foreignKey: 'product_id',
//   as: 'product'
// })