const express = require('express');

const aboutController = require('../controllers/aboutController');
const aboutRouter = express.Router();

function router() {

  const {  aboutPageMeta } = aboutController();
  
  aboutRouter.route('/about').get(aboutPageMeta);


  return aboutRouter;
};

module.exports = router;