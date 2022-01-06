const express = require('express');

const serviceController = require('../controllers/serviceController.js');
const router = express.Router();

// router.post('/service/add-service', serviceController.addService)
router.post('/service/add-service', serviceController.upload, serviceController.addService)
router.get('/services/list', serviceController.getAllServices)
// By ID's
router.get('/service/:service_id', serviceController.getServiceById)
router.put('/service/:service_id', serviceController.updateService)
router.delete('/service/delete/:service_id', serviceController.deleteService)
// Not yet used
// router.get('/service/pulished', serviceController.getPublishedService)

module.exports = router;