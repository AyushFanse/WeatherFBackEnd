var express = require('express');
var router = express.Router();
var Register = require('../modules/registerModule');

//----------------------------* Resister Router *----------------------------//

router.post('/registeruser', Register.register);

//----------------------------* Login Router *----------------------------//

router.post('/login', Register.login);

//----------------------------* Forgot password *----------------------------//

router.post('/forgotpassword', Register.forgotpassword);


module.exports = router;