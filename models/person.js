'use strict'

const mongoose = require('mongoose');

const capitalize = text => {
    if(text !== 'string')
        return ''
    
    text = text.toLowerCase();
    return  text.charAt(0).toUpperCase() + text.substring(1)
    
} 

const personSchema = new mongoose.Schema({
        name: {
            firstName: {
                type: String,
                required: true,
                
            },
            lastName: {
                type: String,
                required: true,
                
            }
        },
        height: {
            type: Number,
            required: true,
            min: 0
        },
        weight: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true,
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
)

personSchema.virtual('name.full').get( function () {
    return `${this.name.firstName} ${this.name.lastName}`
});



const Person = mongoose.model('Person', personSchema);


module.exports = Person;