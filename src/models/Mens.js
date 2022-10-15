const express = require('express')
const  mongoose  = require('mongoose')

//define schema
const menSchema = new mongoose.Schema({
  ranking:{
    type:Number,
    required:true,
    unique:true},
  name:{
    type:String,
    required:true,
    trim:true 
  },
  dob:{
    type:Date,
    trim:true 
  },
  city:{
    type:String,
    trim:true 
  },
  country:{
    type:String,
    trim:true 
  },
  score:{
    type:Number,
 
    trim:true 
  },
  event:{
    type:String,
    default:"100m"
  }
})
//collection creation after schema
const MensRanking = new mongoose.model("MenRanking",menSchema)
module.exports = MensRanking;