const express = require('express');
const cors = require('cors');
const db = require('./Config/db')
require('dotenv').config()
const adminRouter = require('./Routers/adminRouter')
const userRouter = require('./Routers/userRouter')
const app = express();
const PORT = 5000;

db(()=>{
  try {
      console.log("DataBase Successfully Connected");        
  } catch (error) {
      console.log("Database Not Connected : ", error);        
  }
});

app.use(cors(
  {
    origin: '*'
  }
));
app.use('/admin',adminRouter)
app.use('/',userRouter)

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});