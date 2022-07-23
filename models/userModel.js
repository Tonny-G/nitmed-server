const mongoose =require('mongoose');

const  UserSchema = new mongoose.Schema({
    fullname: {
        type:"String",
        required:"true"},

    email:{
        type:"String",
        required:"true"},

    phone:{
        type:"String",
        required:"true"},

    address:{
        type:"String",
        required:"true"},

    password:{
        type:"String",
        required:"true"},

    confirmPassword:{
        type:"String",
        required:"true"},

        isAdmin:{
            type:'boolean',
            default:'false'
        },
        date:{
            type:'Date',
            default:Date.now
        }
    })
  
  module.exports=mongoose.model('User', UserSchema);