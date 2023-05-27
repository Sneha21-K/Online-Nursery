const express = require('express');
const router = express.Router();

require('../db/cons');
const User = require("../model/userSchema");
router.get('/',(req,res) => {
    res.send('Hello,I am Sneha K');
 });


router.post('/register',(req,res)=>{
    const{name,email,password,cpassword,phone,address,order}=req.body;
   if(!name || !email || !password || !cpassword || !phone || !address || !order){
    return res.status(422).json({error:"plz fill all the details"});
   }
    //console.log(name);
    //console.log(email);

   // console.log(req.body);
   
   // res.json({message:req.body});
  // res.send("Heloooo");
    User.findOne({email:email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({error:" You've already registered"});    
        }

        const user=new User({name, email, password, cpassword, phone, address, order});

        user.save().then(()=> {
            res.status(201).json({message:"User registered"});
        }).catch((err) => res.status(500).json({error:"Failed to register"}));
    }).catch(err =>{ console.log(err);});




});





 module.exports = router;