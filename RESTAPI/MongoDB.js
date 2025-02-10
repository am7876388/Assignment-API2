const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const PORT = 8000;
const URL = "mongodb://localhost:27017/Ayush1"
mongoose.connect(URL).then(() =>{
console.log("Success");
}).catch((err) =>{
console.log("Error ",err);
})
const Schema = new mongoose.Schema({
firstName:{type : String,required:true},
lastName:{type: String,required:true},
hobby:{type:String,required:true}
});
app.listen(PORT,() =>{
console.log("Listening to PORT ",PORT);
})
const USER = mongoose.model("USER",Schema);
app.get("/users",async(req,res) =>{
try {
const num1 = await USER.find();
res.status(200).json(num1);
} catch (error) {
res.status(500).json({message:error});
}
})
app.get("/users/:id",async(req,res) =>{
try {
const num1 = await USER.findById(req.params.id);
if(!num1) return res.status(404).json({message:"Not Found"});
res.status(200).json(num1);
} catch (error) {
res.status(500).json({message:error});
}
})
app.post("/user",async(req,res) =>{
try {
const num1 = new USER(req.body);
await num1.save();
res.status(200).json(num1);
} catch (error) {
res.status(500).json({message:error});
}
})
app.put("/user/:id",async(req,res) =>{
try {
const num1 = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true});
if(!num1) return res.status(404).json({message:"User Not Found"});
res.status(200).json(num1);
} catch (error) {
res.status(500).json({message:error});
}
})
app.delete("/user/:id",async(req,res) =>{
try {
const num1 = await USER.findByIdAndDelete(req.params.id);
if(!num1) return res.status(404).json({message:"User Not Found"});
res.status(200).json({message:"User Deleted"});
} catch (error) {
res.status(500).json({message:error});
}
})
