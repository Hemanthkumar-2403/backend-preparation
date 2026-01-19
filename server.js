
const express = require("express")
const app=express()
require("dotenv").config()

app.get("/health" ,(req,res)=>{
    res.send("Server is running")
});

const port =process.env.port || 4000

app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
})