const wikiController = (req, res) => {

  
    const getWiki = (req, res) => {
    res.send('Wiki home page!');
  };
 
   return {
    getWiki,
   };
 }
 
 module.exports = wikiController;