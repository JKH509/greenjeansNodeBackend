const express = require('express');

const loginController = require('../controllers/loginController');
const loginRouter = express.Router();

function router() {

    const {  getAll,getCustomerById, addCustomer } = loginController();
    
    loginRouter.route('/login').get(getAll);
    // customerRouter.route('/customer/:Customer_ID').get(getCustomerById)
    // customerRouter.route('/customer/add-customer').post(addCustomer)
 
    return loginRouter;
};


module.exports = router;