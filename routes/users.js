var express = require('express');
var User = require('../modules/userModule');
var router = express.Router();

///////////////////////////* Routes for Users *////////////////////////////

router.get('/getusers', User.getUser);
router.patch('/updateuser/:userId', User.updateUser);
router.delete('/deleteuser/:userId', User.deleteUser);

module.exports = router;
