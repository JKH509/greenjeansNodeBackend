const express = require('express');

const customerController = require('../controllers/customerController.js');
const router = express.Router();

// router.post('/customer/add-service', customerController.addCustomer)
router.post('/customer/add-service', customerController.upload, customerController.addCustomer)
router.get('/customers/list', customerController.getAllCustomers)
// By ID's
router.get('/customer/:id', customerController.getCustomerById)
router.put('/customer/edit/:id', customerController.updateCustomer)
router.delete('/customer/delete/:id', customerController.deleteCustomer)

// Not yet used
// router.get('/customer/pulished', customerController.getPublishedCustomer)

module.exports = router;