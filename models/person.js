// 'use strict'
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        firstName: {
            type:String,
            required:true
        },
        lastName: ft
            type:String,
            require:true
        
        }
    },
    height: {
        type:Number,
        required:true,
        min:0
    }
    
    }, 

    {
        timestamps: true,
        toObject:{
            virtuals: true
        },
        
        
    
    toJSON: {
        virtuals: true
    }
    
})

personSchema.virtual('name.full').get(function(){
    return this.name.firstName + ' ' + this.name.lastName
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person

