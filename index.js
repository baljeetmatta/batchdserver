//module http-object
const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader("content-type","text/html");

    if(req.url=="/" || req.url=="/index.html")
    {
        res.write(readFile("./index.html"));
        res.end();
    //res.write("Welcome to node js");
    //res.end();
    // fs.readFile("./index.html","utf-8",(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })
    }
    else if(req.url=="/about.html")
    {
        res.write(readFile("./about.html"));
        res.end();
        // res.write("Welcome to about us page");
        // res.end();
        // fs.readFile("./about.html","utf-8",(err,data)=>{
        //     res.write(data);
        //     res.end();
        // })
    }
    else if(req.url=="/contact.html")
    {
        res.write(readFile("./contact.html"));
        res.end();
        //res.write ("Welcome to <b>Contact</b> us PAge");
       // res.end();
    //    fs.readFile("./contact.html","utf-8",(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })
    }
    else if(req.url=="/style.css")
    {
        res.write(readFile("./style.css"));
        res.end();
        //res.write ("Welcome to <b>Contact</b> us PAge");
       // res.end();
    //    fs.readFile("./style.css","utf-8",(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })
    }
    else if(req.url=="/script.js")
    {
        res.write(readFile("./script.js"));
        res.end();
        //res.write ("Welcome to <b>Contact</b> us PAge");
       // res.end();
    //    fs.readFile("./script.js","utf-8",(err,data)=>{
    //     res.write(data);
    //     res.end();
    // })
    }
    else
    {
    
        res.write("No Page");
     res.end();
}
    
});
function readFile(filename)
{ 
    return fs.readFileSync(filename,"utf-8");

}
server.listen(3000);
/*
server.on("connection",(socket)=>{
    console.log("REquest received");
})
*/
