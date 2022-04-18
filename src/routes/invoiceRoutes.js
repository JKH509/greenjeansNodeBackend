const express = require('express');

const invoiceController = require('../controllers/invoiceController');
const router = express.Router();

// router.post('/invoice/create-invoice', invoiceController.addInvoice)
// router.post('/invoice/create-invoice', invoiceController.upload, invoiceController.addInvoice)
router.get('/invoices/list', invoiceController.getAllInvoices)
router.post('/invoice/create-invoice', invoiceController.addInvoice)
// By ID's
// router.get('/invoice/:invoice_id', invoiceController.getInvoiceById)
// router.put('/invoice/edit/:invoice_id', invoiceController.updateInvoice)
// router.delete('/invoice/delete/:invoice_id', invoiceController.deleteInvoice)


module.exports = router;