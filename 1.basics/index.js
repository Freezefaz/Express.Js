// const is never changing
const express = require("express");

let app =express();

// add routes here
// request and response
app.get("/", function(req, res){
    res.send("<h1>Hello from Express</h1>");
})

app.get("/hello/:name", (req,res)=>{
    // This property is an object containing properties mapped to the named route “parameters”. 
    // For example, if you have the route /user/:name, then the “name” property is available as req.params.name.
    let name = req.params.name;
    res.send("Hi, " + name);
})

// don't write any code after this if not won't appear
app.listen(3000, ()=>{
    console.log("Server started")
})