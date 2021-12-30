
const express = require('express');


const wikiController = require('../controllers/wikiController');
const wikiRouter = express.Router();

function router() {

  const {  getWiki, addWiki, editWiki, deleteWiki } = wikiController();
  
  wikiRouter.route('/wiki').get(getWiki);
  wikiRouter.route('/wiki/add').post(addWiki);
  wikiRouter.route('/wiki/edit').put(editWiki);
  wikiRouter.route('/wiki/delete/:id').delete(deleteWiki);

  return wikiRouter;
};

module.exports = router;