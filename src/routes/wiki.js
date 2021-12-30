// wiki.js - Wiki route module

const express = require('express');
// const router = express.Router();

const wikiController = require('../controllers/wikiController');

const wikiRouter = express.Router();

function router() {

  const {  getWiki } = wikiController();
  
  wikiRouter.route('/customer/wiki').get(getWiki);

  return wikiRouter;
};






module.exports = router;