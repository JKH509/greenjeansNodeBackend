const db = require('../models')
// Image upload
const multer = require('multer')
const path = require('path')

const { DataTypes, Sequelize, Op, HasOne  } = require('sequelize')

const FrontRoute= db.Frontent_Nav_Data


// Get All WorkOrders
const getAllFrontRoutes = async (req, res) => {
  try {
    res.send('Hello from work order')
  // let frontRoute = await FrontRoute.findAll({})
  // res.status(200).send(frontRoute)
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
      }
      const frontRoute = await FrontRoute.create(data)
      res.status(200).send(frontRoute)
      // console.log('Success')

    } catch (err) {
      console.log(err)
      // res.status(404)
      // .send(err)
    }
  };

 

module.exports = {
  getAllFrontRoutes, 
  // updateCustomer,
  // deleteCustomer
}