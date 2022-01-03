const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')

const Customer = db.Customer_Data


// Get All Services
const getAllCustomers = async (req, res) => {
  let customers = await Customer.findAll({})
  res.status(200).send(customers)
}
  // Create
const addCustomer = async (req, res) => {
  try {
    let info = {
      first_name: req.body.customerFirstName,
      last_name: req.body.customerLastName,
      email: req.body.customerEmail,
      phone_number: req.body.customerPhone,
      mobile_phone: req.body.customerMobile,
      preferred_priority: req.body.customerPriority,
      street_address: req.body.customerAddress,
      address_two: req.body.customerAddressTwo,
      city: req.body.customerCity,
      state: req.body.customerState,
      postal_code: req.body.customerZip,
      country: req.body.customerCountry,
      street_billing_address: req.body.customerBillingAddress,
      street_billing_address_two: req.body.customerBillingAddressTwo,
      billing_acity: req.body.customerBillingCity,
      billing_state: req.body.customerBillingState,
      billing_postal_code: req.body.customerBillingZip,
      distance_fo: req.body.customerDistance,
      notes: req.body.customerNotes,
      property_image: req.file.path,
      preferred_payment_method: req.body.customerPaymentType
    }
    const customer = await Customer.create(info)
    res.status(200).send(customer)
  } catch {
    
  }
};

// Get Services By ID
const getCustomerById = async (req, res) => {
  let id = req.params.id
  let customer = await Customer.findOne({
    where: {
      id: id
    }
  })
  res.status(200).send(customer)
}

// UPDATE Customer By ID
const updateCustomer = async (req, res) => {
  let id = req.params.id;
  const customer = await Customer.update(req.body, {
    where: {
      id: id,
    },
  });
  res.status(200).send(customer);
};

// DELETE Customer By ID
const deleteCustomer = async (req, res) => {
  let id = req.params.id
  await Customer.destroy({where: {id: id}})
  res.status(200).send('Customer is deleted')
}

// Photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/customer_images')
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
}).single('property_image')




module.exports = {
  getAllCustomers, 
  upload,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer
  // getPublishedService
}