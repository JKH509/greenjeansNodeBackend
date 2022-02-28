const express = require('express')
const { validateToken } = require("../middlewares/AuthMiddleware")

const usersController = require('../controllers/loginController');
const userRouter = express.Router();

function router() {

  const { getAllUsers, addUsers, login } = usersController();
  
  userRouter.route('/users',validateToken).get(getAllUsers);
  userRouter.route('/register').post(addUsers);
  // userRouter.route('/login',validateToken).post(login);
  userRouter.route('/login').post(login);

  // userRouter.route('/login',validatToken).post(login);

  userRouter.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
  });

  return userRouter;
};

module.exports = router;