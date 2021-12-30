const db = require('../../dbConfig');

const serviceController = (req, res) => {

  const getAll = (req, res) => {
    const sqlGetservices = "SELECT * FROM Services";
    db.query(sqlGetservices, (err, result) => {
      res.send(result);
    });
  };

 return {
  getAll,
 };
}

module.exports = serviceController;