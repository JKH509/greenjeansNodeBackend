const db = require("../../config/dbConfig.js");

const sql = require('mysql2');

const wikiController = (req, res) => {

  
    const getWiki = (req, res) => {
      const sqlGetservices = "SELECT * FROM `tests`";
      db.query(sqlGetservices, (err, result) => {
        res.send(result);
      });
  };


  async function addWiki(req, res) {
    const value1 = req.body.entryOne;
    const value2 = req.body.entryTwo;
    db.query(
      "INSERT INTO tests (`value1`, `value2`) VALUES(?,?)",
       [value1, value2],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send("Values Inserted");
        }
      }
    );
  }

  async function editWiki(req, res) {
    const id = req.body.id;
    const Wage = req.body.entryTwo;
    db.query(
      "UPDATE  tests SET `Value1` = ? WHERE id = ?",
      [Wage, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  }


  async function deleteWiki(req, res) {
    const id = req.params.id;
    db.query("DELETE FROM `tests` WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }


   return {
    getWiki,
    addWiki,
    editWiki,
    deleteWiki
   };
 }
 
 module.exports = wikiController;