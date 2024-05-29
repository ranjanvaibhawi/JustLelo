const express=require("express")
const app=express()
const ErrorHandler=require("./utils/ErrorHandler")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

        //coookie parseer
        
        app.use(express.json()); //This middleware parses incoming JSON data sent in the request body and makes it accessible on the req.body property of the request object.
        app.use(cookieParser());  //This middleware parses cookies attached to the incoming HTTP request and makes them accessible on the req.cookies property of the request object
      //  app.use(cors())
        app.use("/",express.static("uploads"))    //uplaod forlder is accessible
        app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//import routes
const user =require("./controller/user")

app.use("/api/v2/user",user)



app.use(ErrorHandler)
module.exports=app