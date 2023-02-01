const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/AdminControllers/adminCredentialsController')

router.post('/adminLogin',adminController.adminLogin)


module.exports = router;