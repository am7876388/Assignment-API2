const express = require("express");//Importing Express
const app = express();//Initializing Express
app.use(express.json());//Using a middleware to process json data
app.use((req,res,next) =>{//A middleware to print the request method and request url and status code
res.on("finish",() => console.log(`${req.method} ${req.url} - Status Code ${res.statusCode}`));
next();
})
const Validation = (req,res,next) =>{//A verification middleware
const {id,FirstName,LastName,Hobby} = req.body;
if(!id || !FirstName || !LastName || !Hobby){
return res.status(400).json({message:"One of the Field is missing"});
}
next();
}
const PORT = 8000;//PORT Number
const num1 = [{//Data structure to store data
id:"1",
FirstName:"Ayush",
LastName:"Mishra",
Hobby:"Playing Games"
}]
app.get("/users",(_,res) =>{//Get route to print out all the users
res.status(200).json(num1);
});
app.get("/users/:id",(req,res) =>{//Get route to print out specific user
try {
const num2 = num1.find((elem) => elem.id.toString() === req.params.id.toString());
if(!num2){
return res.status(404).json({message:"Not Found"});
}
else{
return res.status(200).json(num2);
}    
} catch (error) {
res.status(500).json({Error:error.message});    
}
});
app.post("/user",Validation,(req,res) =>{//Post route to put data into the API
try {
const{id,FirstName,LastName,Hobby} = req.body;
const num3 = {id:id,FirstName:FirstName,LastName:LastName,Hobby:Hobby};
num1.push(num3);
return res.status(201).json({message:"Success",Data:num3});
} catch (error) {
res.status(500).json({Error:error.message});
}
});
app.put("/user/:id",Validation,(req,res) =>{//Put route to update a specific value 
try {
const num2 = num1.findIndex((elem) => elem.id.toString() === req.params.id.toString());
if(num2 < 0){
res.status(404).json({message:"Not Found"});
}
else{
num1[num2] = {...num1[num2],...req.body};
return res.status(200).json(num1[num2]);
}
} catch (error) {
return res.status(500).json({Error:error.message});
}
});
app.delete("/user/:id",(req,res) =>{//Delete route to delete the specific user
try {
const num2 = num1.findIndex((elem) => elem.id.toString() === req.params.id.toString());
if(num2 < 0){
return res.status(404).json({message:"Not Found"});
}
else{
num1.splice(num2,1);
return res.status(200).json({message:"User Deleted Successfully"});
}
} catch (error) {
res.status(500).json({Error:error.message});
}
});
app.listen(PORT,() => console.log("Listening to PORT ",PORT));//Listening to a specific PORT