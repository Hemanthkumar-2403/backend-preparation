
const express = require("express")
const app=express()
require("dotenv").config()
app.use(express.json())
const healthRoutes=require("./routes/healthRoutes")
const userRoutes=require("./routes/usersRoutes")


//signup
app.post("/signup",(req,res)=>{
    const data =req.body;
    res.json({
        message :"Signup sucess",
        data :data,
    })
})


// routes
app.use(healthRoutes)
//userRoutes
app.use(userRoutes)


const port=process.env.PORT ||4000;
app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);

})