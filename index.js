const express= require("express")
const {connection} = require("./config/db")
const { authentication } = require("./middleware/authentication")
const { bmiRouter } = require("./routes/bmi")
const {userRoutes}= require("./routes/user")
var cors = require('cors')
const PORT= process.env.PORT || 8080
const app= express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to mock10")
})
app.use("/user",userRoutes)
app.use(authentication)
app.use("/bmi",bmiRouter)

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connected")
    }
    catch(err){
       console.log(err)
    }
})