const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const db = require('./dbConfig')
// const mysql = require("mysql2");
// const db = require('./dbConfig');

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



const customerRouter = require('./src/routes/customerRoutes')();
const employeeRouter = require('./src/routes/employeeRoutes')();
const serviceRouter = require('./src/routes/serviceRoutes')();
const wikis = require('./src/routes/wiki')();

app.use('/api', customerRouter);
app.use('/api', employeeRouter);
app.use('/api', serviceRouter);
app.use('/api', wikis);


// app.post('/api/create', (req, res) => {
//   const value1 = req.body.entryOne;
//   const value2 = req.body.entryTwo;
//   db.query(
//     'INSERT INTO tests (`id`, `value1`, `value2`) VALUES(?,?,?)', 
//     [value1, value2],
//     (err, result) =>{
//       if (err){
//         console.log(err)
//       } else{
//         res.send("Values Inserted")
//       }
//     });
// };

// app.post('/api/create', (req, res) => {
  
 
// })


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, PATCH');
  next();
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});