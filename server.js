
const express = require("express")
const app=express()
require("dotenv").config()

app.use(express.json())
app.get("/health" ,(req,res)=>{
    res.send("Server is running")
});

app.post("/signup",(req,res)=>{
    const data =req.body;
    res.json({
        message :"Signup sucess",
        data :data,
    })
})

const port =process.env.port || 4000

app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
})