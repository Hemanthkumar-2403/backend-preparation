
const express = require("express")
const app=express()
require("dotenv").config()
app.use(express.json())

//fake database
let users = [
  {
    id: "101",
    name: "hemanth",
    email: "hemanth@123gmail.com"
  },
  {
    id: "102",
    name: "kumar",
    email: "kumar@gmail.com"
  }
];

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

// UPDATE user
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  res.json({
    message: "User updated successfully",
    userId: userId,
    updatedData: updatedData
  });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: "User deleted successfully",
    userId: userId
  });
});


const port =process.env.PORT || 4000

app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
})