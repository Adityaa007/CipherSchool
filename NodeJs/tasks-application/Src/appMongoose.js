const {connect}=require("mongoose")

const MONGO_URL="mongodb+srv://Aditya07:Adityasuyal@cluster0.az2f05i.mongodb.net"

const DB_NAME= `cs-mern`;

async function connectDb(){
    try{
await connect(`${MONGO_URL}/${DB_NAME}`);
console.log(`MongoDB connected`);
 } catch(err){
    console.error(err);
 }
 }
 connectDb();