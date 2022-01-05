const express = require('express');

const employeeController = require('../controllers/employeeController.js');
const router = express.Router();

// router.post('/employee/add-service', employeeController.addEmployee)
router.post('/employee/add-employee', employeeController.upload, employeeController.addEmployee)
router.get('/employees/list', employeeController.getAllEmployees)
// By ID's
router.get('/employee/:employee_id', employeeController.getEmployeeById)
router.put('/employee/edit/:employee_id', employeeController.updateEmployee)
router.delete('/employee/delete/:employee_id', employeeController.deleteEmployee)

// Not yet used
// router.get('/employee/pulished', employeeController.getPublishedEmployee)

module.exports = router;