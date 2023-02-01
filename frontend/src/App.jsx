import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import ExerciseDetail from './pages/UserPages/ExerciseDetail'
import Home from './pages/UserPages/Home'
import UserLoginPage from './pages/UserPages/UserLogin/UserLoginPage'
import Login from'./pages/AdminPages/LoginPage/Login'
import AdminHome from './pages/AdminPages/AdminHome/AdminHome'
import UserOtpPage from './pages/UserPages/UserOtpPage'
function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
        <Route path='/Login' element={<UserLoginPage/>}/>
        <Route path='/userOtpPage' element={<UserOtpPage/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/admin/adminHomePage' element={<AdminHome/>}/>
      </Routes>
    </Box>
  )
}

export default App
