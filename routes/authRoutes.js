
const express = require("express");
const router = express.Router();

const { Signup } = require("../controllers/authController");
const{Signin}=require("../controllers/authController")

router.post("/signup", Signup);
router.post("/signin",Signin)

module.exports = router;
