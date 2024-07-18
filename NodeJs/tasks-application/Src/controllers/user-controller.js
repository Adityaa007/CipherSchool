const user=require("../models/user")

const addNewuser=async(req,res)=>{
    try{
        const{name,email,age,password}=req.body
        const user=new user({name,email,age,password})
        await user.save();
        return res.status(201).send(user)
    } catch(err){
        console.error(err);
        return res.send(500).send({message:err.message})
    }
}

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await user.findByEmailAndPasswordForAuth(email,password);
        console.info(`user with Email: ${email} Successfully logged in`)
        return res.status(200).send(user);
    } catch(err){
    console.error(err);
    return res.status(500).send({messsage:"Login Failed!"})
    }
};

module.exports={addNewuser,loginUser}