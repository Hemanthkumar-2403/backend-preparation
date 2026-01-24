
const express = require("express")
const app=express()
require("dotenv").config()
app.use(express.json())
const healthRoutes=require("./routes/healthRoutes")
const userRoutes=require("./routes/usersRoutes")
const authRoutes=require("./routes/authRoutes")


// routes
app.use(healthRoutes)
//userRoutes
app.use(userRoutes)
//authRoutes
app.use(authRoutes)


const port=process.env.PORT ||4000;
app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);

})