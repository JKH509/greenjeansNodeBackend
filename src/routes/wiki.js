
const express = require('express');


const wikiController = require('../controllers/wikiController');

const wikiRouter = express.Router();

function router() {

  const {  getWiki } = wikiController();
  
  wikiRouter.route('/wiki').get(getWiki);

  return wikiRouter;
};

module.exports = router;