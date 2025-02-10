const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
app.use(express.json());
let num1 = [{ id: "1",
    firstName: "Anshika",
    lastName: "Agarwal",
    hobby: "Teaching"}]
app.get("/users",(req,res) =>{
res.json(num1);
res.status(200);
})
app.get("/users/:id",(req,res) =>{
const ID = req.params.id;
const found = num1.find((elem) => elem.id == ID);
if(found){
res.status(200).json(found);
}
else{
res.status(404).json({message:"Not Found"});
}
})
app.post("/user",(req,res) =>{
if(req.body.id && req.body.firstName && req.body.lastName && req.body.hobby){
num1.push(req.body);
res.status(200).json(num1);
}
else{
res.status(404).json("Parameters are not enough");
}
})
app.put("/user/:id",(req,res) =>{
const index = num1.findIndex((elem) => elem.id == req.params.id);
if(index !== -1){
num1[index] = {...num1[index],...req.body};
res.status(200).json(num1[index]);
}
else{
res.status(404).json({message:"Not Found"});
}
})
app.delete("/user/:id",(req,res) =>{
const index = num1.findIndex((elem) => elem.id == req.params.id);
if(index !== -1){
num1.splice(index,1);
res.status(200).json(num1);
}
else{
res.status(404).json({message:"Not Found"});
}
})
app.listen(PORT,() =>{
console.log("Listening to server at port ",PORT);
})