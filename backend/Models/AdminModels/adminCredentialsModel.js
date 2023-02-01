const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const adminCredentialsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

adminCredentialsSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id },
     process.env.JWT_PRIVATEKEY,
      {
    expiresIn: "7d",
     }
  );
  return token;
};

const adminCredentials = mongoose.model(
  "adminCredentials",
  adminCredentialsSchema
);

const validate = (data) => {
  const schema = joi.object({
    username: joi.string().required().label("username"),
    password: passwordComplexity.required().label("password"),
  });
  return schema.validate(data);
};

module.exports = { adminCredentials, validate };
