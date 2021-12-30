const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001;
// const mysql = require("mysql2");
// const db = require('./dbConfig');

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



const customerRouter = require('./src/routes/customerRoutes')();
const employeeRouter = require('./src/routes/employeeRoutes')();
const serviceRouter = require('./src/routes/serviceRoutes')();
const wiki = require('./src/routes/wiki')();

app.use('/api', customerRouter);
app.use('/api', employeeRouter);
app.use('/api', serviceRouter);
app.use('/api', wiki);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, PATCH');
  next();
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});