import React, { useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import axios from "axios";

const UserLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  // console.log("this is  is Sign Up", isSignUp);

  // const [isOtp,setIsOtp] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    userEmail: "",
    userPassword: "",
    userAge: "",
    userHeight: "",
    userWeight: "",
  });

  const handleChange = async(e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const signUpDetails = inputs;
    const {
      username,
      userEmail,
      userPassword,
      userAge,
      userHeight,
      userWeight,
    } = inputs;
    console.log("THIS IS SIGN UP DETAILS", signUpDetails);
    const { data: res } = await axios.post(
      "/userSignUpAction?username=" +
        username +
        "&&userEmail=" +
        userEmail +
        "&&userPassword=" +
        userPassword +
        "&&userAge=" +
        userAge +
        "&&userHeight=" +
        userHeight +
        "&userWeight=" +
        userWeight
    );
    const newUser = res.data;
    console.log("This is res.data", res.data);
    // setIsOtp(true);
    handleOtp(newUser);
    // window.location = "/userOtpPage?userDetails="+ newUser;
  };

  const handleOtp = async (userDetails) => {
    console.log("reched handleotp");
    const {username,userEmail} = userDetails;
    try {
      await axios.get('/sendOtp?username='+username+'&&userEmail='+userEmail)
      window.location = "/userOtpPage?userDetails=" + userDetails;

    } catch (error) {
      console.log("This is an error from handle otp",error.message)
    }
  };

  const resetState = () => {
    setIsSignUp(!isSignUp);
    setInputs({
      username: "",
      userEmail: "",
      userPassword: "",
      userAge: "",
      userHeight: "",
      userWeight: "",
    });
  };

  const resetTexts = () => {
    setInputs({
      username: "",
      userEmail: "",
      userPassword: "",
      userAge: "",
      userHeight: "",
      userWeight: "",
    });
  };
  return (
    <div>
      <form action="#">
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={500}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            <b>{!isSignUp ? "LOGIN" : "SIGN IN"}</b>
          </Typography>
          {isSignUp && (
            <TextField
              name="username"
              value={inputs.username}
              onChange={handleChange}
              type={"text"}
              margin="normal"
              variant="outlined"
              placeholder="Username"
            />  
          )}
          <TextField
            name="userEmail"
            value={inputs.userEmail}
            onChange={handleChange}
            type={"email"}
            margin="normal"
            variant="outlined"
            placeholder="Email"
          />
          {isSignUp && (
            <TextField
              name="userAge"
              value={inputs.userAge}
              onChange={handleChange}
              type={"number"}
              margin="normal"
              variant="outlined"
              placeholder="Age"
            />
          )}
          {isSignUp && (
            <TextField
              name="userHeight"
              value={inputs.userHeight}
              onChange={handleChange}
              type={"number"}
              margin="normal"
              variant="outlined"
              placeholder="Height (in cm)"
            />
          )}
          {isSignUp && (
            <TextField
              name="userWeight"
              value={inputs.userWeight}
              onChange={handleChange}
              type={"number"}
              margin="normal"
              variant="outlined"
              placeholder="Weight (in Kg)"
            />
          )}
          <TextField
            name="userPassword"
            value={inputs.userPassword}
            onChange={handleChange}
            type={"password"}
            margin="normal"
            variant="outlined"
            placeholder="Password"
          />
           {/* {isOtp && (
            <TextField
              name="userWeight"
              value={isOtp}
              onChange={(e)=>{setIsOtp(e.target.value)}}
              type={"number"}
              margin="normal"
              variant="outlined"
              placeholder="Enter OTP"
            />
          )} */}
          <Stack direction={"row"}>
            <Button
              endIcon={
                !isSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
              }
              type="submit"
              variant="contained"
              color="warning"
              onClick={isSignUp ? handleSignUp : handleLogin}
              sx={{
                marginTop: 3,
                marginRight: 2,
                borderRadius: 3,
              }}
            >
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
            <Button
              type="reset"
              variant="contained"
              color="error"
              onClick={resetTexts}
              sx={{
                marginTop: 3,
                borderRadius: 3,
              }}
            >
              Reset
            </Button>
          </Stack>

          <Button
            endIcon={
              isSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
            }
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
            onClick={resetState}
          >
            Change To {isSignUp ? "login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UserLoginPage;
