const express = require('express');

const employeeController = require('../controllers/employeeController');
const employeeRouter = express.Router();

function router() {

    const {  getAll, getEmployeeById } = employeeController();
    
    employeeRouter.route('/employee/list').get(getAll);
    employeeRouter.route('/employee/:id').get(getEmployeeById);
   
 
    
    return employeeRouter;
};


module.exports = router;