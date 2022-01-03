const express = require('express');
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5001;
// const db = require("./config/dbConfig.js");
// const db = require('./models')

const multer = require('multer')


app.use(cors())

// middleware
// var corOptions = {
//   origin: "http://localhost:3000"
// }
// app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const customerRouter = require('./src/routes/customerRoutes.js');
const employeeRouter = require('./src/routes/employeeRoutes.js');

const serviceRouter = require('./src/routes/serviceRoutes.js');

const profileRouter = require('./src/routes/profileRoutes')();
const loginRouter = require('./src/routes/loginRoutes')();
const wikis = require('./src/routes/wiki')();

app.use('/api', customerRouter);
app.use('/api', employeeRouter);
app.use('/api', serviceRouter);
app.use('/api', profileRouter);
app.use('/api', loginRouter);
app.use('/api', wikis);


//static Images Folder
app.use('/upload/images', express.static('./upload/images'))
app.use('/upload/customer_images', express.static('./upload/customer_images'))
app.use('/upload/employee_images', express.static('./upload/employee_images'))


// app.use(express.static(__dirname + '/src/profiles'));
// app.use('/uploads', express.static('uploads'));
// app.use('/upload/images', express.static('upload/images'))





app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, PATCH');
  next();
});


// db.sequelize.sync().then(() => { 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

// });