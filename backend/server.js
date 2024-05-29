const app=require("./app")
const connectdb=require("./db/Database")    
//handling uncaught exception
 process.on("uncaughtException",(err)=>{
    console.log(`error: ${err.message}`)
    console.log(`shutting down the server for handling uncaught exceptions`)
})

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"config/.env"
    })
}
//connectdb
connectdb();






//create server
const server=app.listen(process.env.PORT,()=>{
console.log(`Server is running at https://localhost:${process.env.PORT}`)
})

//unhandled promise rejection


process.on("unhandledRejection",(err)=>{
    console.log(`error: ${err.message}`)
    console.log(`shutting down the server for handling uncaught exceptions`)

    server.close(()=>{
        process.exit(1)
    })
})