'use strict'
const mongoose = require('mongoose');


const placesSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    contry : ""
},
{
    timestamps: true,
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        },
        person: {
            type: mongoose.Schema.Types.ObjectId, ref:'Person'
        }
})

placesSchema.virtual('isNorthernHemisphere?').get(function () {
    return this.latitude > 0
})

placesSchema.virtual('isWesternHemisphere?').get(function () {
    return this.longitude < 0
})
const Place = mongoose.model('Place', placesSchema,'Place')
module.exports = Place