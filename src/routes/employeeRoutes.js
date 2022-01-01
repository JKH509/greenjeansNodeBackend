const express = require('express');

const employeeController = require('../controllers/employeeController');
const employeeRouter = express.Router();

function router() {

    const {  getAll, getEmployeeById, addEmployee } = employeeController();
    
    employeeRouter.route('/employee/list').get(getAll);
    employeeRouter.route('/employee/:id').get(getEmployeeById);
    employeeRouter.route('/employee/add-employee').post(addEmployee);
   
 
    
    return employeeRouter;
};


module.exports = router;