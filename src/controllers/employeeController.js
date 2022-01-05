const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')

// Create main model 
const Employee = db.Employee_Data

// Get All Employees
const getAllEmployees = async (req, res) => {
  let employees = await Employee.findAll({})
  res.status(200).send(employees)
}

// Get Employees By ID
const getEmployeeById = async (req, res) => {
  try {
    let employee_id = req.params.employee_id
  let employee = await Employee.findOne({
    where: {
      employee_id: employee_id
    }
  })
  res.status(200).send(employee)
  } catch {
    
  }
}





// Create
const addEmployee = async (req, res) => {
  try {
    let info = {
      uuid: req.body.uuid,
      first_name:req.body.employeeFirstName,
      last_name: req.body.employeeLastName,
      email: req.body.employeeEmail,
      phone_number:  req.body.employeePhone,
      mobile_phone:  req.body.employeeMobile,
      street_address:  req.body.employeeAddress,
      address_two: req.body.employeeAddressTwo,
      city: req.body.employeeCity,
      state: req.body.employeeState,
      postal_code: req.body.employeeZip,
      country: req.body.employeeCountry,
      distance_fo: req.body.employeeDistance,
      job_title: req.body.employeeJobTitle,
      starting_wage: req.body.employeeStartingWage,
      ending_wage: req.body.employeeLastWage,
      gender: req.body.employeeGender,
      ethnicity: req.body.employeeEthnicity,
      license_status: req.body.employeeDriversLicenseStatus,
      med_conditions: req.body.employeeMedicalConditions,
      notes: req.body.employeeCautions,
      employee_image: req.file.path,
      preferred_payment_method: req.body.employeePayPreference,
    }
    const employee = await Employee.create(info)
    res.status(200).send(employee)
    console.log(employee)
  } catch {
    
  }
};

// UPDATE Employee By ID
const updateEmployee = async (req, res) => {
  let employee_id = req.params.employee_id;
  const employee = await Employee.update(req.body, {
    where: {
      employee_id: employee_id,
    },
  });
  res.status(200).send(employee);
};

// DELETE Employee By ID
const deleteEmployee = async (req, res) => {
  let employee_id = req.params.employee_id
  await Employee.destroy({where: {employee_id: employee_id}})
  res.status(200).send('Employee is deleted')
}

// Photo uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads/employee_images')
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
}).single('employee_image')




module.exports = {
  addEmployee, 
  upload,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
}