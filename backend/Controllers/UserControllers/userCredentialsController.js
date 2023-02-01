const userdetails = require("../../Models/UserModels/userCredentialsModel");4
const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:"athul2522001@gmail.com",
    pass: "myhmxppxxvoixqtl",
  },
});
const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;

const userSignUpAction = (req, res) => {
  try {
    // console.log("reched here @ signup backend")
    let data = req.query;
    data.userHeight = parseInt(data.userHeight);
    data.userAge = parseInt(data.userAge);
    data.userWeight = parseInt(data.userWeight);
    const {username,userEmail,userPassword,userAge,userHeight,userWeight} = data;
    const newUser= {
      username: username,
      userEmail: userEmail,
      userPassword: userPassword,
      userAge: userAge,
      userHeight: userHeight,
      userWeight: userWeight,
    }
    console.log("this is user sign up action details", newUser);
    const userSignUpDetails = new userdetails(newUser);

    userSignUpDetails.save().then((response) => {
      console.log("user added to database");
      res.status(200).send({data:newUser, message:"Logged in successfully"}); 
    });
  } catch (error) {
    console.log("There is an error at userSignUpAction",error)
  }    
};


const sendOtp = (req,res)=>{
  console.log("reched backend sendOtp")
  console.log('This is username from otp',req.query.username)
  console.log("This is userEmail from otp",req.query.userEmail)
  const userEmail = req.query.userEmail
  let mailDetails = {
    from: "athul2522001@gmail.com",
    to: userEmail,
    subject: "Your Fitness Partner REGISTRATION",
    html: `<p>YOUR OTP FOR REGISTERING IN Your Fitness Partner IS ${OTP}</p>`,
  };
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs",err.message);
    } else {
      console.log("Email sent successfully");
      res.status(200).send({data:OTP});
    }
  });
}


const checkOtp = async(req,res)=>{
console.log("This is otp from front end",req.query.otp)
console.log("This is otp from back end", OTP)
if(req.query.otp === OTP)
{
  res.status(200).send(true)
}
}



module.exports = {
  userSignUpAction,
  sendOtp,
  checkOtp
};

