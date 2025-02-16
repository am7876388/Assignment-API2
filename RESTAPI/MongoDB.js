const express = require("express");//Importing express
const app = express();//Initializing express
app.use(express.json());//Using a middleware to parse JSON data
const PORT = 8000;//PORT Number
const URL = "mongodb://localhost:27017/MongoDB"//URL of the Database
const mongoose = require("mongoose");//Importing mongoose 
mongoose.connect(URL).then(() => console.log("Successfully connected to MongoDB")).catch((err) => console.log("Error ",err));//Connecting to Database
const Schema = new mongoose.Schema({//Defining Schema of the Data stored
FirstName:{type:String,required:true},
LastName:{type:String,required:true},
Hobby:{type:String,required:true}
});
const Data = mongoose.model("Ayush1",Schema);//Modelling the schema 
app.get("/users",async(req,res) =>{//Get route for getting the Data stored in the MongoDB
try {
const num1 = await Data.find();//Using await for asynchronous process
res.status(200).json(num1);
} catch (error) {
res.status(500).json({Error:error.message});
}
});
app.get("/users/:id",async(req,res) =>{//Get route for getting the Data based upon the id
try {
const num1 = await Data.findById(req.params.id.toString());//Using await for asynchronous process
if(!num1){
return res.status(404).json({message:"Not Found"});
}
else{
return res.status(200).json({message:"Success",Data:num1});
}
} catch (error) {
res.status(500).json({Error:error.message});
}
});
app.post("/user",async(req,res) =>{//Post Route for putting the data into the MongoDB
try {
const {FirstName,LastName,Hobby} = req.body;//Destructuring Data from the body of request
if(!FirstName || !LastName || !Hobby){//Checking if all the fields are present or not
return res.status(400).json({message:"One of the Field is missing"});
}
else{
const num1 = {FirstName:FirstName,LastName:LastName,Hobby:Hobby};
const num2 = new Data(num1);
await num2.save();
return res.status(201).json({message:"User Saved Successfully"});
}
} catch (error) {
res.status(500).json({Error:error.message});
}
});
app.put("/user/:id",async(req,res) =>{//Put route for Updating a data based upon the id given
try {
const num1 = await Data.findByIdAndUpdate(req.params.id,req.body,{new:true});
if(!num1){
return res.status(404).json({message:"Not Found"});
}
else{
return res.status(200).json({message:"Updated Data Successfully"});
}
} catch (error) {
res.status(500).json({Error:error});
}
});
app.delete("/user/:id",async(req,res) =>{//Delete route for Deleting a data based upon the id given
try {
const num1 = await Data.findByIdAndDelete(req.params.id);
if(!num1){
res.status(404).json({message:"Not Found"});
}
else{
res.status(200).json({message:"User Deleted SuccessFully"});
}
} catch (error) {
res.status(500).json({Error:error.message});
}
});
app.listen(PORT,() => console.log("Listening to PORT",PORT));//Listening to a particular port for a request