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

// sequelize.authenticate()
// .then(() => {
//   console.log('connected..')
// })
// .catch(err => {
//   console.log('Error'+ err)
// })


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Service_Data = require('../models/servicesModel/serviceModel.js')(sequelize, DataTypes)
db.Customer_Data = require('../models/customersModel/customerModel.js')(sequelize, DataTypes)
db.Work_Order_Data = require('../models/workOrderModel/workOrderModel.js')(sequelize, DataTypes)
db.Invoice_Data = require('../models/invoiceModel/invoiceModel.js')(sequelize, DataTypes)
db.Employee_Data = require('../models/employeesModel/employeeModel.js')(sequelize, DataTypes)
db.Category_Data = require('../models/servicesModel/categoryModel.js')(sequelize, DataTypes)
db.User_Login_Data = require('../models/userLogin/userModel.js')(sequelize, DataTypes)
db.Frontent_Nav_Data = require('../models/routeModel/frontendModel/frontendNavModel.js')(sequelize, DataTypes)


// This creates a work order for the customer by connecting the service_id to the customer_id to create a new table
// db.Customer_Data.belongsToMany(db.Service_Data, {through: db.Work_Order_Data, foreignKey: 'customer_id' })
// db.Service_Data.belongsToMany(db.Customer_Data, {through: db.Work_Order_Data, foreignKey: 'service_id' })

// This sets the relationship of Customer information to be joined with the work order they requested to be able create an invoice
// db.Customer_Data.belongsToMany(db.Work_Order_Data, {through: db.Invoice_Data, foreignKey: 'customer_id' })
// db.Work_Order_Data.belongsToMany(db.Customer_Data, {through: db.Invoice_Data, foreignKey: 'job_id' })

// This sets the relationship of the Category, and the services. This allows services to be found by using the category_id 
db.Service_Data.belongsTo(db.Category_Data, { foreignKey: 'category_id' })
db.Category_Data.hasMany(db.Service_Data);

// db.reviews = require('./reviewModel.js')(sequelize, DataTypes)


// db.products.hasMany(db.reviews, {
//   foreignKey: 'product_id',
//   as: 'review'
// })


// Service.belongsTo(Customer, { 
//   constraints: true, 
//   onDelete: 'CASCADE'
//  });
// Customer.hasMany(Service);

// Customer.hasOne(Invoice);
// Invoice.belongsTo(Customer);
// Invoice.belongsToMany(Service, { through: InvoiceItem });
// Service.belongsToMany(Invoice, { through: InvoiceItem });

// Using force: true will delete all previous data
// db.sequelize.sync({ force: false })

// db.sequelize.sync({ alter: false })
db.sequelize.sync({ alter: true })
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