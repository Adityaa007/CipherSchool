const express=require("express")
const router=express.Router();
const usercontroller=require("../controllers/user-controller")
router.post("/login",usercontroller.loginUser);
router.post("/signup",usercontroller.addNewuser);

module.exports=router;