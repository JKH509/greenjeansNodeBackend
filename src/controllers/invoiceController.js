const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')
import { Work_Order_Data, Customer_Data } from '../models'

const Invoice = db.Invoice_Data


// Get All WorkOrders
const getAllInvoices = async (req, res) => {
  res.send('Hello from Invoice')
  // let workOrder = await WorkOrder.findAll({})
  // res.status(200).send(workOrder)
}

  // Create
  const addInvoice = async (req, res) => {
    try {
      let data = {
        job_property_name: req.body.property_name,
        job_contact_first_name: req.body.first_name,
        job_contact_last_name: req.body.last_name,
        job_contact_phone: req.body.phone,
        job_interval: req.body.interval,
        job_address: req.body.street_address,
        job_city: req.body.city,
        job_state: req.body.state,
        job_postal_code: req.body.postal_code,
        job_count: req.body.job_count_size,
        job_price: req.body.job_price,
        job_distance_from_homebase: req.body.job_distance,
        job_crew_id_assigned: req.body.job_crew,
        job_time_start: req.body.job_start,
        job_time_start: req.body.job_stop,
        job_status: req.body.job_status,
        job_image: req.file.path,
        // createdAt
        // updatedAt	
        // deletedAt
        customer_id: req.body.customer_id,
        service_id: req.body.service_id,
      }
      const invoice = await Invoice.create(data)
      res.status(200).send(invoice)
    } catch (err) {
      console.log(err)
    }
  };




module.exports = {
  getAllInvoices, 
  // upload,
  // getCustomerById,
  addInvoice,
  // updateCustomer,
  // deleteCustomer
}