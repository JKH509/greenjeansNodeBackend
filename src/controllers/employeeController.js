const db = require('../../dbConfig');

const employeeController = (req, res) => {


const getAll = (req, res) => {
  const sqlGetservices = "SELECT * FROM Employee_Data";
  db.query(sqlGetservices, (err, result) => {
    res.send(result);
  });
};

async function getEmployeeById(req, res) {
  try {
    let employeeId = req.params.id;
    let sql = "SELECT * FROM `Employee_Data` WHERE `id`= ?";
    db.query(sql, [employeeId], function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(404).json(error);
  }
}

async function addEmployee(req, res) {
  const firstName = req.body.employeeFirstName;
  const lastName = req.body.employeeLastName;
  const gender = req.body.employeeGender;
  const email = req.body.employeeEmail;
  const jobtitle = req.body.employeeJobTitle;
  const startingwage = req.body.employeeStartingWage;
  const lastwage = req.body.employeeLastWage;
  const medical = req.body.employeeMedicalConditions;
  const image = req.body.employeeImage;
  const license = req.body.employeeDriversLicenseStatus;
  const address = req.body.employeeAddress;
  const city = req.body.employeeCity;
  const state = req.body.employeeState;
  const zip = req.body.employeeZip;
  const start = req.body.employeeStart;
  const end = req.body.employeeEnd;
  const cautions = req.body.employeeCautions;
  const distance = req.body.employeeDistance;
 
  db.query(
    "INSERT INTO `Employee_Data`(`first_name`, `last_name`, `email`, `gender`, `job_title`, `start_date`, `starting_wage`, `last_wage`, `end_date`, `distance_from_work`, `cautions`, `medical_conditions`, `employee_image`, `address`, `state`, `city`, `zip`, `license_status`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
     [firstName,lastName,email,gender,jobtitle,start,startingwage,lastwage,end,distance,cautions,medical,image,address,state,city,zip,license],
    (err, result) => {
      if (err) {
        res.status(404)
      } else {
        res.status(200).send(result);
      }
    }
  );
}



 return {
  getAll,
  getEmployeeById,
  addEmployee,
 };
}

module.exports = employeeController;