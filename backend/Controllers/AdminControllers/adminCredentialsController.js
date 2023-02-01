const {adminCredentials} = require('../../Models/AdminModels/adminCredentialsModel')
const joi = require('joi')
const bcrypt = require('bcrypt')

const adminLogin = async(req,res)=>{
  console.log("reahced backend")
  console.log("this is check req",req.query)
  
  try {
    const {error} = validate(req.query);
    console.log("this is req.body",req.query)
    console.log("reaches here")
    if(error)
    {
      return res.status(400).send(error.details[0].message);
    }
    const admin = await adminCredentials.findOne({username: req.query.username})
    if(!admin){
      console.log("reaches inside !admin")
      return res.status(401).send({message:'Invalid Email or Password'});
    }
    console.log("reached here 1")
    const validPassword = await bcrypt.compare(req.query.password, admin.password)
    if(!validPassword){
      return res.status(401).send({message:'Invalid Email or Password'});
    }
    const token = admin.generateAuthToken()
    res.status(200).send({data:token, message:"Logged in successfully"}); 
  } catch (error) {
    console.log("reched backend eroor",error)
    res.status(500).send({message:'Internal Server Error'})
  }
}

const validate = (data)=>{
  const schema = joi.object({
    username: joi.string().min(3).max(30).required().label('username'),
    password: joi.string().min(3).max(30).required().label('password')
  })
  return schema.validate(data)
}


module.exports = {
  adminLogin
}