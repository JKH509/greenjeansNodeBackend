const express = require('express');

const workOrderController = require('../controllers/workOrderController.js');
const router = express.Router();

// router.post('/workOrder/add-service', workOrderController.addworkOrder)
// router.post('/workOrder/add-workOrder', workOrderController.upload, workOrderController.addWorkOrder)
router.get('/work-orders/list', workOrderController.getAllWorkOrders)
router.post('/workOrder/create-new-work-order', workOrderController.addWorkOrder)


// By ID's
// router.get('/workOrder/:workOrder_id', workOrderController.findAllOpenWorkOrderByCustomerId)
// router.get('/workOrder/open-order-by-customer-id/:customer_id', workOrderController.findAllOpenWorkOrderByCustomerId)
router.get('/workOrder/:workOrder_id', workOrderController.findAllOpenWorkOrderByCustomerIdandJobStatus)
router.get('/workOrder/open-order-by-customer-id/:customer_id', workOrderController.findAllOpenWorkOrderByCustomerIdandJobStatus)
// router.get('/workOrder/:workOrder_id', workOrderController.getWorkOrderById)
// router.put('/workOrder/edit/:workOrder_id', workOrderController.updateWorkOrder)
// router.delete('/workOrder/delete/:workOrder_id', workOrderController.deleteWorkOrder)


module.exports = router;