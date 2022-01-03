const db = require("../../config/dbConfig");

const sql = require('mysql')
const multer = require('multer')

const profileController = (req, res) => {

  const getAll = (req, res) => {
    // const sqlGetservices = "SELECT * FROM Customer_Data";
    // db.query(sqlGetservices, (err, result) => {
      // res.send(result);
      res.send('High from profile');
    // });
  };
//! Use of Multer
// var storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//       callBack(null, './src/profiles/images/')     // './public/images/' directory name where save the file
//   },
//   filename: (req, file, callBack) => {
//       callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })
// var upload = multer({
//   storage: storage
// });


// // const postImage = upload.single('image') (req, res) => {
//   const postImage =  (req, res) => {
//   if (!req.file) {
//     console.log("No file upload");
// } else {
//     console.log(req.file.filename)
//     var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
//     var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
//     db.query(insertData, [imgsrc], (err, result) => {
//         if (err) throw err
//         console.log("file uploaded")
//     })
// }
// }








  return {
    getAll,
    // postImage
   };
  }

  module.exports = profileController;