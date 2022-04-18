const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')

// Create main model 
const Service = db.Service_Data

// Create
const addService = async (req, res) => {
  try {
    let info = {
      service_type: req.body.service_type,
      service_description: req.body.service_description,
      service_price: req.body.service_price,
      service_warranty: req.body.service_warranty,
      warranty_description: req.body.warranty_description,

      // service_season_spring: req.body.service_season_spring,
      // service_season_summer: req.body.service_season_summer,
      // service_season_fall: req.body.service_season_fall,
      // service_season_winter: req.body.service_season_winter,
      service_image: req.file.path,
      category_id: req.body.category_id
    }
    // files is for more than 1 image
    // service_image: req.files.path
    const service = await Service.create(info)
    res.status(200).send(service)
    console.log(service)
  } 
  catch (e) {
    console.log(e);
  }
};

// Get All Services
const getAllServices = async (req, res) => {
  let services = await Service.findAll({})
  res.status(200).send(services)
}

// Get only certain attributes of all objects
// const getAllServices = async (req, res) => {
//   let services = await Service.findAll({
//     attributes : [
//       'id',
//       'ServiceType',
//       'ServiceDescription'
//     ]
//   })
//   res.status(200).send(services)
// }

// Get Services By ID
const getServiceById = async (req, res) => {
  let service_id = req.params.service_id
  let service = await Service.findOne({
    where: {
      service_id: service_id
    }
  })
  res.status(200).send(service)
}

// UPDATE Service By ID
const updateService = async (req, res) => {
  let id = req.params.service_id;
  const service = await Service.update(req.body, {
    where: {
      service_id: id,
    },
  });
  res.status(200).send(service);
};

// DELETE Service By ID
const deleteService = async (req, res) => {
  let id = req.params.service_id
  await Service.destroy({where: {service_id: id}})
  res.status(200).send('Service is deleted')
}

// Photo uploads
// where you are going to store the image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads/services')
  },
  // What you will call the image
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)  
      const extname = fileTypes.test(path.extname(file.originalname))
      if(mimeType && extname) {
          return cb(null, true)
      }
      cb('Give proper files formate to upload')
  }
}).single('service_image')

// app.post('/profile-upload-multiple', upload.array('profile-files', 12), function (req, res, next) {
//   // req.files is array of `profile-files` files
//   // req.body will contain the text fields, if there were any
//   var response = '<a href="/">Home</a><br>'
//   response += "Files uploaded successfully.<br>"
//   for(var i=0;i<req.files.length;i++){
//       response += `<img src="${req.files[i].path}" /><br>`
//   }
//   return res.send(response)
// })


module.exports = {
  addService, 
  upload,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  // getPublishedService
}
