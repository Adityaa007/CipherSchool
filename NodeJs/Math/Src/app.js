const http=require("http");

const server = http.createServer((req,res)=>{
    res.write("This is response from your first Node.js Server")
    res.end();
});

server.listen(8080,()=>{
    console.log("Server is Running");
})