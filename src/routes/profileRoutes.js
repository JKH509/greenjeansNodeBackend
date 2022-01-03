const express = require('express');

const profileController = require('../controllers/profileController');
const profileRouter = express.Router();

function router() {

    const {  getAll, postImage } = profileController();
    
    profileRouter.route('/profile').get(getAll);

    // profileRouter.route('/profile').post(postImage);
 
   
    return profileRouter;
};


module.exports = router;