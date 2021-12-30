const express = require('express');

const serviceController = require('../controllers/serviceController');
const serviceRouter = express.Router();

function router() {

    const {  getAll } = serviceController();
    
    serviceRouter.route('/services/list').get(getAll);
 
    return serviceRouter;
};


module.exports = router;