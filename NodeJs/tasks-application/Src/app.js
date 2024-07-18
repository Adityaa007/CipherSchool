require("./appMongoose")
const express= require("express");
const Task = require("./models/Task");
const userrouter=require("./routes/user-router")
const app=express();

app.use(express.json());
app.use("/user",userrouter)


app.get("/",(req,res)=>{
    res.send("this is response from your first Node.js server")
})

app.get("/add",(req,res)=>{
    let {a:firstNumber,b:SecondNumber}=req.query;
    let sum=parseInt(firstNumber)+parseInt(SecondNumber);
    res.send({sum});
})

app.post("/add-task",async(req,res)=>{
    const task=new Task({title:"Test Task",description: "Tes task description"});
     await task.save();
     return res.status(201).send({message:"Saved"})
})

app.put("/update-task/:taskId",async(req,res)=>{
    const {taskId}=req.params;
    const updateResult=await Task.updateOne({_id: taskId}, { $set:{...req.body}});
    if(!updateResult.matchedCount){
        return res.status(404).send({message: ` Task with ID: ${taskId} was not found`})
    }
    return res.status(200).send({message: ` Update Success`})
})

app.get("/get-tasks",async(req,res)=>{
    const taskList=await Task.find();
    return res.status(200).send(taskList);
})

app.delete("/delete-task/:taskId",async(req,res)=>{
    const {taskId}=req.params;
    const DeleteResult=await Task.deleteOne({_id: taskId});
    if(!DeleteResult.deletedCount){
        return res.status(404).send({message: ` Task with ID: ${taskId} was not found`})
    }
    return res.status(200).send({message: ` Delete Success`})
})


app.listen(8080,()=>{
    console.log(`server is running`)
})