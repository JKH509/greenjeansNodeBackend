const db = require("../../config/dbConfig.js");
const path = require('path');

const fs = require('fs')

const aboutController = (req, res) => {

  
    const aboutPageMeta = (req, res) => {
      console.log('About page visited!');

       process.chdir('C:\\Users\\james\\Documents\\greenjeans-509\\greenjeansclient');


  const filePath = path.resolve(process.cwd(), './build' ,'./index.html')
  console.log('Filepath: ',filePath)
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'About Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    // response.send(result);

    console.log('served')
    res.send(result);
  });
};


  
   return {
    aboutPageMeta,
   };
 }
 
 module.exports = aboutController;