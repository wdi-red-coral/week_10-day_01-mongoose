'use strict'
const mongoose = require('mongoose');

const thepersonSchema = new mongoose.Schema({

    name: {

        firstName: {
            type: String,
            require: true,

        },
        lastName: {
            type: String,
            require: true,

        }

    },
    height: {
        type: Number,
        require: true,
        min: 0,
    },

    weight: {
        type: Number,
        require: true,
        min: 0,
    },
},
    {

        timestamps: true,
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        },





    })

thepersonSchema.virtual("name.full").get(function () {
    return this.name.firstName + " " + this.name.lastName
})

const Person = mongoose.model("Person", thepersonSchema)
module.exports = Person