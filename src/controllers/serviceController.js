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
      ServiceType: req.body.newServiceName,
      ServiceDescription: req.body.newServiceDescription,
      ServicePrice: req.body.newServicePrice,
      ServiceWarranty: req.body.newServiceWarranty,
      WarrantyDescription: req.body.newServiceWarrantyDescription,
      ServiceSeason: req.body.newServiceSeasonSpringCheckBox,
      ServiceImage: req.file.path
    }
    const service = await Service.create(info)
    res.status(200).send(service)
    console.log(service)
  } catch {
    
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
  let id = req.params.id
  let service = await Service.findOne({
    where: {
      id: id
    }
  })
  res.status(200).send(service)
}

// UPDATE Service By ID
const updateService = async (req, res) => {
  let id = req.params.id;
  const service = await Service.update(req.body, {
    where: {
      id: id,
    },
  });
  res.status(200).send(service);
};

// DELETE Service By ID
const deleteService = async (req, res) => {
  let id = req.params.id
  await Service.destroy({where: {id: id}})
  res.status(200).send('Service is deleted')
}

// Photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/images')
  },
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
}).single('ServiceImage')

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
