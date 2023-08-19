const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    
    let filename="";
    if(req.url=="/")
    filename="index.html";
else if (req.url=="/about")
filename="about.html";
else
    filename=req.url.substr(1);
res.write(readFile(filename));


    res.end();

});
server.listen(3000,(err)=>{
    if(err)
    console.log("Unable to start server...")
else
console.log("Server Started....");

})
function readFile(filename)
{ 
    // try{
    // return fs.readFileSync(filename,"utf-8");
    // }catch(e){
    //     return "";
    // }
    if(fs.existsSync(filename))
    return fs.readFileSync(filename,"utf-8");
else
return "";



}