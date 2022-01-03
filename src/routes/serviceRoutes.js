const express = require('express');

const serviceController = require('../controllers/serviceController.js');
const router = express.Router();

router.post('/service/add-service', serviceController.upload, serviceController.addService)
router.get('/services/list', serviceController.getAllServices)
// By ID's
router.get('/service/:id', serviceController.getServiceById)
router.put('/service/edit/:id', serviceController.updateService)
router.delete('/service/delete/:id', serviceController.deleteService)
// Not yet used
// router.get('/service/pulished', serviceController.getPublishedService)

module.exports = router;