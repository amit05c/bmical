const {Router}= require("express")
const { BmiModel } = require("../models/bmi.model")
const jwt = require('jsonwebtoken');
const bmiRouter= Router()



bmiRouter.get("/",async(req,res)=>{
    //  let {status,}= req.query
    let {userId}= req.body
  
    // res.send(req.body)
       
      if(userId){

          let profile= await BmiModel.find({userId})
          res.send({"message": profile})
      }else{
    
        res.send({"message": "login first"})
      }
    
    
      
  })



bmiRouter.post("/create", async(req,res)=>{

     console.log(req.body)
    
   
          let {height,weight,userId}= req.body
          let bmi= Math.floor(weight/height)
          console.log(bmi,userId)
        
          let newBmi= new BmiModel({
             userId,
             height,
             weight,
              bmi

          })
           await newBmi.save()
            res.send({"message":newBmi})
       
})

module.exports={
    bmiRouter
}