const express = require('express');
const app = express()
const cors = require('cors')
// const PORT = process.env.PORT || 5001;
const path = require('path');
const fs = require('fs')
const PORT =  process.env.PORT || 5001;

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

// process.chdir('C:\\Users\\james\\Documents\\greenjeans-509\\greenjeansclient');


// app.get('/about', function(request, response) {
//   console.log('About page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html')
//   fs.readFile(filePath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     data = data.replace(/\$OG_TITLE/g, 'About Page');
//     data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
//     result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
//     response.send(result);
//   });
// });

// app.use(express.static(path.resolve(process.cwd(), './public')));

// const filePath = path.resolve(process.cwd(), './public' ,'./index.html')
// console.log('Filepath: ',filePath)

// app.get('*', function(request, response) {
//   const filePath = path.resolve(process.cwd(), './public');
//   response.sendFile(filePath);

// });

// process.chdir('C:\\Users\\james\\Documents\\greenjeans-509\\greenjeansserver');

// routers
const customerRouter = require('./src/routes/customerRoutes.js');
const workOrderRouter = require('./src/routes/workOrderRoutes.js');
const invoiceRouter = require('./src/routes/invoiceRoutes');
const employeeRouter = require('./src/routes/employeeRoutes.js');
const serviceRouter = require('./src/routes/serviceRoutes.js');
const categoryRouter = require('./src/routes/categoryRoutes.js');

const profileRouter = require('./src/routes/profileRoutes')();
const loginRouter = require('./src/routes/userRoutes')();
const aboutPageRouter = require('./src/routes/aboutRoutes')();

app.use('/api', categoryRouter);
app.use('/api', customerRouter);
app.use('/api', workOrderRouter);
app.use('/api', invoiceRouter);
app.use('/api', employeeRouter);
app.use('/api', serviceRouter);
app.use('/api', profileRouter);
app.use('/api', loginRouter);
app.use('/api', aboutPageRouter);
// app.use('/api', wikis);


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