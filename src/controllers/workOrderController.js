const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')

const { DataTypes, Sequelize, Op, HasOne  } = require('sequelize')

const WorkOrder = db.Work_Order_Data


// Get All WorkOrders
const getAllWorkOrders = async (req, res) => {
  try {
    // res.send('Hello from work order')
  let workOrder = await WorkOrder.findAll({})
  res.status(200).send(workOrder)
  } catch (error) {
    console.log(error)
      res.status(404)
      // .send(err)
  }
}

  // Create
  const addWorkOrder = async (req, res) => {
    try {
      let data = {
        job_property_name: req.body.job_property_name,
        job_contact_first_name: req.body.job_contact_first_name,
        job_contact_last_name: req.body.job_contact_last_name,
        job_email: req.body.job_email,
        job_contact_phone: req.body.job_contact_phone,
        job_interval: req.body.job_interval,
        job_day_priority: req.body.job_day_priority,
        job_address: req.body.job_address,
        job_city: req.body.job_city,
        job_state: req.body.job_state,
        job_postal_code: req.body.job_postal_code,
        job_notes: req.body.job_notes,
        job_count: req.body.job_count,
        job_price: req.body.job_price,
        job_distance_from_homebase: req.body.job_distance_from_homebase,
        job_crew_id_assigned: req.body.job_crew_id_assigned,
        job_time_start: req.body.job_time_start,
        job_time_stop: req.body.job_time_stop,
        job_status: req.body.job_status,
        // job_image: req.file.path,
        // job_image: req.file.path,
        customer_id: req.body.customer_id,
        service_id: req.body.service_id,
      }
      const workOrder = await WorkOrder.create(data)
      res.status(200).send(workOrder)
      // console.log('Success')

    } catch (err) {
      console.log(err)
      // res.status(404)
      // .send(err)
    }
  };

  const findAllOpenWorkOrder = async (req, res) => {
    try {
      // res.send('Hello from work order')
    let allOpenWorkOrder = await WorkOrder.findAll({where: {job_status: 1}})
    res.status(200).send(allOpenWorkOrder)
    } catch (error) {
      console.log(error)
        // res.status(404)
        // .send(err)
    }
  }


  const findAllOpenWorkOrderByCustomerId = async (req, res) => {
  
      
    try {
      // customer_id: req.body.customer_id,
      // customer_id: req.body.customer_id,
      
      let data = {
        customer_id: 1,
        job_status: 1,
      }

      // res.send('Hello from work order')
    let allOpenWorkOrder = await WorkOrder.findAll({where: 
      {
        job_status: 1
      }
    })
    res.status(200).send(allOpenWorkOrder)
    } catch (error) {
      console.log(error)
        // res.status(404)
        // .send(err)
    }
  }
  const findAllOpenWorkOrderByCustomerIdandJobStatus = async (req, res) => {
    
    try {
      customer_id = req.params.customer_id,
      // customer_id: req.body.customer_id,
      // customer_id = 1,
      job_status = 1
        
    let allOpenWorkOrder = await WorkOrder.findAll({where: {
      [Op.and]: [
        { customer_id: customer_id },
        { job_status: job_status }
      ]
    }})
    res.status(200).send(allOpenWorkOrder)
    } catch (error) {
      console.log(error)
        // res.status(404)
        // .send(err)
    }
  }




module.exports = {
  getAllWorkOrders, 
  findAllOpenWorkOrder,
  findAllOpenWorkOrderByCustomerId,
  findAllOpenWorkOrderByCustomerIdandJobStatus,
  // upload,
  // getCustomerById,
  addWorkOrder,
  // updateCustomer,
  // deleteCustomer
}