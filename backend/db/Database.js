const mongoose=require("mongoose")

const connectdb=()=>{
    mongoose.connect(process.env.DB_URL)
       .then((data)=>{
            console.log(`db is connected ,server=${data.connection.host}`)
        }
    )
    .catch((err)=> console.log("database error"))
}

module.exports=connectdb