
// External variables
const express = require("express");
const mongoose = require('mongoose');
const userController = require('./Routes/userController');
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config();


// // app.js
// const connectDB = require('./config/db');
// // Connect Database
// connectDB();




//App variables
const app = express();
const port = process.env.PORT || "8000";
// #Importing the userController
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads// configurations
const MongoURI = 
'mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@cluster0.nvdj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
;
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));



console.log("MongoDB is now connected")

app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });
  

// #Routing to usercontroller here


app.post('/createflight', userController.createflight)
app.get('/viewflights',userController.viewflights)
app.delete('/deleteflight',userController.deleteflight)
app.put('/updateflight',userController.updateflight)
app.post('/searchflight',userController.searchflight)




// Starting server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
