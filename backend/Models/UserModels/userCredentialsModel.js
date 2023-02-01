const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  username:{type: String, unique: true},
  userEmail:{type: String},
  userAge:{type: Number},
  userWeight:{type: Number},
  userHeight:{type: Number},
  userPassword:{type: String}
})

const userdetails = mongoose.model(
  "userdetails",userSchema
)

module.exports = userdetails
