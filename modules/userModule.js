const User = require('../model/User');
const  bcrypt = require('bcrypt');
const Joi = require('joi');


///////////////////////////* Get All Users From DataBase *////////////////////////////

exports.getUser = async(req, res, next)=>{
    try{
      var response = await User.find();
      res.status(200).send(response);
    }catch(err){
      res.status(400).send(err);
  }
  };


  ///////////////////////////* Update User By Id *////////////////////////////

  exports.updateUser =async (req, res, next)=>{

    try{
      let password = '';
        if(req.body.password){
          const salt = await bcrypt.genSalt(10);
          password = bcrypt.hash(req.body.password, salt);
        }else{
          password = req.body.password
        }
      var response = await User.findByIdAndUpdate(req.params.userId,{
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        number:req.body.number,
        password:password
      },{new : true})
      res.status(200).send(response);
    }catch(err){
      res.status(400).send(err);
  }
  };


  ///////////////////////////* Delete User By Id *////////////////////////////

  exports.deleteUser =async (req, res, next) => {
    try{
      var response = await User.findByIdAndRemove(req.params.userId);
    res.status(200).send(response);
  }catch(err){
    res.status(400).send(err);
  }
  };
