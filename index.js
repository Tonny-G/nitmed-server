const express= require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const cors = require('cors')
app.use(express.json())
app.use(cors())


const User=require('./models/userModel');
const Donation=require('./models/DonationModel')
const { request, response } = require('express');
const bcrypt=require("bcrypt")

dotenv.config();
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("connected to db")
});

app.post('/register', async(req, res)=>{
   try{
    const user= await new User({
        fullname:req.body.fullname,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    }
    )
    console.log(user)
    const users=await user.save();
    !users && res.status(404).send('User Not created');
    res.status(201).send('User has been created')
}
catch(error){
res.status(500).send("not Created")}
});

//login
app.post("/login",async (req,res)=>{
    console.log("Email", req.body.email)
    try{
        const user= await User.findOne({email:req.body.email});
        if (!user){
            res.status(404).json("User not found");
        }else{
            res.status(200).json(user)
        }
        

        }catch(error){
            console.log(error)
            res.status(500).json(error);
        }
     });
     //Donate

     app.post("/donation", async(req, res)=>{
        try{
         const donation= await new Donation({
            donorName:req.body.donorName,
            medName:req.body.medName,
            medType:req.body.medType,
            medExpDate:req.body.medExpDate,
            medLotNo:req.body.medLotNo,

         }
         )
         console.log(donation)
         const donations=await donation.save();
         !donations && res.status(404).send('Donation succesful');
         res.status(201).send('Donation not submitted')
     }
     catch(error){
     res.status(500).send("Donation failed ")}
     });

app.listen(8000,()=>{
    console.log("Back end is working")});