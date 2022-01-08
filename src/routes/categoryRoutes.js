const express = require('express');

const categoryController = require('../controllers/categoryController.js');
const router = express.Router();


router.post('/category/add-category', categoryController.upload, categoryController.addCategory)
// router.post('/category/add-category',  categoryController.addCategory)
router.get('/categories/list', categoryController.getAllCategories)
// By ID's
router.get('/category/:category_id', categoryController.getCategoryById)
router.put('/category/:category_id', categoryController.updateCategory)
router.delete('/category/delete/:category_id', categoryController.deleteCategory)
// Not yet used
// router.get('/category/pulished', categoryController.getPublishedCategory)

module.exports = router;