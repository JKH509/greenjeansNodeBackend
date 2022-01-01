const db = require('../../dbConfig');
const sql = require('mysql2');


const customerController = (req, res) => {

  const getAll = (req, res) => {
    const sqlGetservices = "SELECT * FROM Customer_Data";
    db.query(sqlGetservices, (err, result) => {
      res.send(result);
    });
  };

  async function getCustomerById(req, res) {
    try {
      let customerId = req.params.Customer_ID;
      let sql = "SELECT * FROM `Customer_Data` WHERE `Customer_ID`= ?";
      db.query(sql, [customerId], function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
      });
    } catch (error) {
      res.status(404).json(error);
    }
  }

  // async function addCustomer (req, res) {
  //   try{
  //     let pool = await sql.connect(config);
  //     let orderCart = await pool.request()
  //     .input("uuid", sql.UniqueIdentifier, req.body.uniqueIdentifier)
  //     .input("first_name", sql.NVarChar, req.body.customerFirstName)
  //     .input("last_name", sql.NVarChar, req.body.customerLastName)
  //     .input("email", sql.Int, req.body.customerEmail)
  //     .input("address", sql.NVarChar, req.body.customerAddress)
  //     .input("city", sql.NVarChar, req.body.customerCity)
  //     .input("state", sql.NVarChar(100), req.body.customerState)
  //     .input("zip", sql.NVarChar(10), req.body.customerZip)
  //     .input("customer_started", sql.NVarChar(20), req.body.customerStartDate)
  //     .input("customer_stopped", sql.NVarChar(20), req.body.customerEndDate)
  //     .input("complaints", sql.NVarChar(250), req.body.customerComplaints)
  //     .input("services", sql.NVarChar(2), req.body.customerService)
  //     .input("turf_sqft", sql.NVarChar, req.body.customerTurfSqft)
  //     .input("weekly_expense", sql.Money, req.body.customerWeeklyExpense )
  //     .input("seasonal_expense", sql.Money, req.body.customerSeasonalExpense)
  //     .input("one_time_service_expense", sql.Money, req.body.customerOneTimeServiceExpense)
  //     .input("distance_from_shop", sql.NVarChar(100), req.body.customerDistance)
  //     .input("notes", sql.NVarChar(10), req.body.customerNotes)
  //     .input("customer_priority", sql.NVarChar(20), req.body.customerPriority)
  //     .input("billing_address", sql.NVarChar(20), req.body.customerBillingAddress)
  //     .input("billing_city", sql.NVarChar(250), req.body.customerBillingCity)
  //     .input("billing_state", sql.Char(2), req.body.customerBillingState)
  //     .input("billing_zip", sql.Money, req.body.customerBillingZip)
  //     .input("payment_type", sql.NVarChar(250), req.body.customerPaymentType)
  //     .query("INSERT INTO `Customer_Data`(`Customer_ID`, `first_name`, `last_name`, `email`, `address`, `city`, `state`, `zip`, `customer_started`, `customer_stopped`, `complaints`, `services`, `turf_sqft`, `weekly_expense`, `seasonal_expense`, `one_time_service_expense`, `distance_from_shop`, `notes`, `customer_priority`, `billing_address`, `billing_city`, `billing_state`, `billing_zip`, `payment_type`) VALUES (uuid,first_name,last_name,email,address,city,state,zip,customer_started,customer_stopped,complaints,services,turf_sqft,weekly_expense,seasonal_expense,one_time_service_expense,distance_from_shop,notes,customer_priority,billing_address,billing_city,billing_state,billing_zip,payment_type)");
  //   res.status(200).json(orderCart);
  //   }
  //   catch (err) {
  //     return res.status(400).json(err);
  //   }
  // }

  async function addCustomer(req, res) {
    const firstName = req.body.customerFirstName;
    const lastName = req.body.customerLastName;
    const email = req.body.customerEmail;
    const address = req.body.customerAddress;
    const city = req.body.customerCity;
    const state = req.body.customerState;
    const zip = req.body.customerZip;
    const start = req.body.customerStart;
    const end = req.body.customerEnd;
    const complaints = req.body.customerComplaints;
    const services = req.body.customerService;
    const turfSqft = req.body.customerTurfSqft;
    const weeklyExp = req.body.customerWeeklyExpense;
    const seasonalExp = req.body.customerSeasonalExpense;
    const otsExp = req.body.customerOneTimeServiceExpense;
    const distance = req.body.customerDistance;
    const notes = req.body.customerNotes;
    const priority = req.body.customerPriority;
    const bAddress = req.body.customerBillingAddress;
    const bCity = req.body.customerBillingCity;
    const bState = req.body.customerBillingState;
    const bZip = req.body.customerBillingZip;
    const payType = req.body.customerPaymentType;
    db.query(
      "INSERT INTO `Customer_Data`(`first_name`, `last_name`, `email`, `address`, `city`, `state`, `zip`, `customer_started`, `customer_stopped`, `complaints`, `services`, `turf_sqft`, `weekly_expense`, `seasonal_expense`, `one_time_service_expense`, `distance_from_shop`, `notes`, `customer_priority`, `billing_address`, `billing_city`, `billing_state`, `billing_zip`, `payment_type`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
       [firstName,lastName,email,address,city,state,zip,start,end,complaints,services,turfSqft,weeklyExp,seasonalExp,otsExp,distance,notes,priority,bAddress,bCity,bState,bZip,payType],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(result);
          // res.status(200).send("Values Inserted");
        }
      }
    );
  }




 return {
  getAll,
  getCustomerById,
  addCustomer
 };
}

module.exports = customerController;