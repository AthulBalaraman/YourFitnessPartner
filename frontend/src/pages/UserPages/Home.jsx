import React ,{useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../../components/UserComponents/Exercises'
import HeroBanner from '../../components/UserComponents/HeroBanner'
import SearchExercises from '../../components/UserComponents/SearchExercises'
import Navbar from '../../components/UserComponents/Navbar'
import Footer from '../../components/UserComponents/Footer'
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Navbar/>
      <HeroBanner />
      <SearchExercises 
       setExercises={setExercises}
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart}/>
      <Exercises
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart} 
      />
      <Footer/>
    </Box>
  )
}

export default Home