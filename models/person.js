'use strict'
//first step define mongoose ...??? 
const mongoose = require('mongoose');
// second create schema and defin the key inside schema 
const personSchema = new mongoose.Schema({
    name:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type: String,
            required: true
        } 
    },
    height:{
        type: Number,
        required: true,
        min:0  
    },
    weight:{
        type: Number,
        required: true,
        min: 0 
    },
},
{
    // to add the time of creation //at what time is create
 timestamps:true,
 // convert it to object if it in jason 
 toObject:{
     virtuals:true
 },
  // convert it to jason if it in object 

 toJSON:{
     virtuals: true
 } ,
 place:[
     {
         type: mongoose.Schema.type.toObjectId, ref: 'Place'
     }
 ]  
})
//used when we whant to use collection of data inside database// like introduction 
//or to combine first name and last name ==> it like function used 
personSchema.virtual('name.full').get(function(){
    return this.name.firstName + ' ' + this.name.lastName
})
const Person = mongoose.model('Person',personSchema,'Person')
module.exports = Person

