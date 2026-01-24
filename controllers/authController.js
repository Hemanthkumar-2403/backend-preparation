const users=require("../data/userData")

const Signup =(req,res)=>{
    const data =req.body;
    res.json({
        message :"Signup sucess",
        data :data,
    })
}

const Signin = (req, res) => {
  const { email, password } = req.body;

  // basic validation
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  // find user (temporary: fake users)
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  // check password (plain text for now)
  if (user.password !== password) {
    return res.status(401).json({
      message: "Invalid password"
    });
  }

  res.json({
    message: "Signin successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};



module.exports={Signup ,Signin}

