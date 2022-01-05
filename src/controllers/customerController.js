const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')

const Customer = db.Customer_Data


// Get All Customers
const getAllCustomers = async (req, res) => {
  let customers = await Customer.findAll({})
  res.status(200).send(customers)
}


  // Create
const addCustomer = async (req, res) => {
  try {
    let info = {
      uuid: req.body.uuid,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      mobile_phone: req.body.mobile_phone,
      preferred_priority: req.body.preferred_priority,
      street_address: req.body.street_address,
      address_two: req.body.address_two,
      city: req.body.city,
      state: req.body.state,
      postal_code: req.body.postal_code,
      country: req.body.country,
      street_billing_address: req.body.street_billing_address,
      street_billing_address_two: req.body.street_billing_address_two,
      billing_city: req.body.billing_city,
      billing_state: req.body.billing_state,
      billing_postal_code: req.body.billing_postal_code,
      distance_fo: req.body.distance_fo,
      notes: req.body.notes,
      property_image: req.file.path,
      preferred_payment_method: req.body.preferred_payment_method
    }
    const customer = await Customer.create(info)
    res.status(200).send(customer)
    console.log(customer)
  } catch {
    
  }
};

// Get Customers By ID
const getCustomerById = async (req, res) => {
  try {
    let customer_id = req.params.customer_id;
  let customer = await Customer.findOne({
    where: {
      customer_id: customer_id
    }
  })
  res.status(200).send(customer)
  }
  catch {

  }
}

// UPDATE Customer By ID
const updateCustomer = async (req, res) => {
  let id = req.params.customer_id;
  const customer = await Customer.update(req.body, {
    where: {
      customer_id: id,
    },
  });
  res.status(200).send(customer);
};

// DELETE Customer By ID
const deleteCustomer = async (req, res) => {
  let id = req.params.customer_id
  await Customer.destroy({where: {customer_id: id}})
  res.status(200).send('Customer is deleted')
}

// Photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads/customer_images/property_images')
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
  // getPublishedCustomer
}