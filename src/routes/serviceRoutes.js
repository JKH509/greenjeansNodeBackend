const express = require('express');

const serviceController = require('../controllers/serviceController.js');
const router = express.Router();

// router.post('/service/add-service', serviceController.addService)
router.get('/services/list', serviceController.getAllServices)
router.post('/service/add-service', serviceController.upload, serviceController.addService)

// By ID's
router.get('/service/:service_id', serviceController.getServiceById)
router.put('/service/edit/:service_id', serviceController.updateService)
router.delete('/service/delete/:service_id', serviceController.deleteService)

module.exports = router;