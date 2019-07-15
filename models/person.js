const mongoose = require('mongoose');

const personeSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
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
  

}, {
    timestamps: true,
    toObject:{
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})

personeSchema.virtual('name.full').get(function(){
    return this.name.firstName + ' ' + this.name.lastName
})

const Person = mongoose.model('Person', personeSchema)

module.exports = Person
