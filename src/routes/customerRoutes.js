
const express = require('express');

const customerController = require('../controllers/customerController');
const customerRouter = express.Router();

function router() {

    const {  getAll,getCustomerById, addCustomer } = customerController();
    
    customerRouter.route('/customer/list').get(getAll);
    customerRouter.route('/customer/:Customer_ID').get(getCustomerById)
    customerRouter.route('/customer/add-customer').post(addCustomer)
 
    return customerRouter;
};


module.exports = router;