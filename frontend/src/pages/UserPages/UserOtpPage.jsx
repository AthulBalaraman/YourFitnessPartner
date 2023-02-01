import React,{useState} from 'react'
import {Box,Typography,TextField,Button} from '@mui/material'
import axios from 'axios'

const UserOtpPage = () => {

  const [otpValue, setOtpValue] = useState("")
  
  const checkOtp =async (e) => {
    e.preventDefault();
    console.log("this is otp value ",otpValue);
    await axios.get('/checkOtp?otp='+otpValue).then((response)=>{
      if(response)
      {
        console.log("Otp matches");
      }
      else{
        console.log("Otp does not match");
      }
    })
  }
  return (
    <form onSubmit={checkOtp}>
    <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={500}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop="100px"
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
            
          }}
        >
          <Typography variant='h4' padding={3} textAlign={"center"}><b>ENTER YOU OTP</b></Typography>
          <TextField
          type="number"
          margin="normal"
          variant="outlined"
          placeholder="Enter OTP"
          name="otpValue"
          value={otpValue}
          onChange={(e)=>{setOtpValue(e.target.value)}}
          ></TextField>
          <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{
            marginTop: 3,
            marginRight: 2,
            borderRadius: 3,
          }}
          >
            Submit
          </Button>
        </Box>

    </form>
  )
}

export default UserOtpPage
