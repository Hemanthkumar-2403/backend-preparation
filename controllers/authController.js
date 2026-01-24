
const Signup =(req,res)=>{
    const data =req.body;
    res.json({
        message :"Signup sucess",
        data :data,
    })
}

module.exports={Signup}

