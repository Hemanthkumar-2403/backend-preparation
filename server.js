
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

//signup
app.post("/signup",(req,res)=>{
    const data =req.body;
    res.json({
        message :"Signup sucess",
        data :data,
    })
})


//users

app.get("/users" ,(req,res)=>{
  res.json({
    message :"All users fected",
    users
  })
})

//get user by id

app.get("/users/:id",(req,res)=>{
  const user =users.find(u=>u.id === req.params.id);
  if(!user){
    return res.status(404).json({
      message :"User not found"
    })
  }
  res.json(user);
})

//update
app.put("/users/id",(req,res)=>{
  const{name,email}=req.body;
  const user = users.find(u=>u.id === req.params.id);
  if(!user){
    return res.status(401).json({
      message:"User not found"
    })
  }
  if(name){
    user.name=name;
  }
  if(email){
    user.email=email;
  }
  res.json({
    message:"User updated successfully",
    user
  })

})

//Delete
app.delete("users/:id",(req,res)=>{
  const index =users.findIndex(u=>u.id === req.params.id)
  if(index ===-1){
    return res.status(404).json({
      message :"User not found"
    })
  }
 const deletedUser = users.splice(index, 1);

  res.json({
    message: "User deleted successfully",
    user: deletedUser[0]
  });

})

const port =process.env.PORT || 4000

app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
})