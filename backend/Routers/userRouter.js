const express = require('express');
const router = express.Router();
const userCredentialsController = require('../Controllers/UserControllers/userCredentialsController')

router.post('/userSignUpAction',userCredentialsController.userSignUpAction)
router.get('/sendOtp',userCredentialsController.sendOtp)
router.get('/checkOtp',userCredentialsController.checkOtp)



module.exports = router;