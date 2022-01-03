const db = require("../../config/dbConfig");
const sql = require('mysql2');

const loginController = (req, res) => {

  const getAll = (req, res) => {
    // const sqlGetservices = "SELECT * FROM Services";
    // db.query(sqlGetservices, (err, result) => {
      res.send("Hello from login");
    // });
  };

 return {
  getAll,
 };

}


module.exports = loginController;