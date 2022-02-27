const db = require('../models')
const Users = db.User_Login_Data
// const sql = require('mysql2');
const bcrypt = require('bcrypt');

const { sign } = require('jsonwebtoken');

const loginController = (req, res) => {

  const getAllUsers = async (req, res) => {
    try {
      let services = await Users.findAll({})
      res.status(200).send(services)
    } catch {
  
    }
  };

  const addUsers = async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;
    // let data = {firstNum, operator, secondNum} = req.body;
    // insert data into table

    bcrypt.hash(userPassword, 10).then((hash) => {
      Users.create({
        user_name: userName,
        user_email: userEmail,
        user_password: hash,
      });
      res.json("SUCCESS");
    });
  };

const login = async (req, res) => { 
  const { userName, userEmail, userPassword } = req.body;
  const user = await Users.findOne({ where: { user_name: userName } });

  if (!user) res.json({ error: "User Doesn't Exist" });
  bcrypt.compare(userPassword, user.user_password ).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });
    const accessToken = sign({ 
      userName: user.user_name, 
      id: user.id 
    }, 
      "useRandomStringGenerator" 
      );
    res.json({token: accessToken, userName: user.user_name, id: user.id});
  });
};



  return {
    getAllUsers,
    addUsers,
    login
   };

}


module.exports = loginController;