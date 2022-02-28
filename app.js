const express = require('express');
const app = express()
const cors = require('cors')
// const PORT = process.env.PORT || 5001;
const PORT =  5001;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, PATCH');
  next();
});

// routers
const customerRouter = require('./src/routes/customerRoutes.js');
const employeeRouter = require('./src/routes/employeeRoutes.js');
const serviceRouter = require('./src/routes/serviceRoutes.js');
const categoryRouter = require('./src/routes/categoryRoutes.js');
// const userRouter = require('./src/routes/userRoutes.js');

const profileRouter = require('./src/routes/profileRoutes')();
const loginRouter = require('./src/routes/userRoutes')();
const wikis = require('./src/routes/wiki')();

app.use('/api', categoryRouter);
app.use('/api', customerRouter);
app.use('/api', employeeRouter);
app.use('/api', serviceRouter);
app.use('/api', profileRouter);
app.use('/api', loginRouter);
app.use('/api', wikis);


//static Images Folder
// app.use('/upload/images', express.static('./upload/images'))

// app.use('/uploads', express.static('./uploads'))
app.use('/uploads/services', express.static('./uploads/services'))
app.use('/uploads/categories', express.static('./uploads/categories'))
app.use('/uploads/customer_images/property_images', express.static('./uploads/customer_images/property_images'))
app.use('/uploads/employee_images', express.static('./uploads/employee_images'))
// app.use('/uploads', express.static('/uploads'))
// /uploads/customer_images/property_images
// app.use('/upload/customer_images', express.static('./upload/customer_images'))
// app.use('/upload/employee_images', express.static('./upload/employee_images'))

app.use(express.static(__dirname + '/uploads/customer_images/property_images'));
app.use(express.static(__dirname + '/uploads/categories'));
// app.use(express.static(__dirname + '/src/profiles'));


// db.sequelize.sync().then(() => { 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
// });