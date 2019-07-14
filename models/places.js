'use strict'
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    // persone: { type: Schema.Types.ObjectId, ref: 'Persone' },
    name:{
        type: String,
        required: true
    },
    latitude :{
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
    country:{
        type: String
    }
},
{
    timestamps:true,
    toObject:{
        virtuals: true
    },
    toJSON:{
        virtuals: true
    }
}
)

placeSchema.virtual('isNorthernHemisphere?').get(function () {
    return this.latitude > 0
})
  
placeSchema.virtual('isWesternHemisphere?').get(function () {
    return this.longitude < 0
})
const placeModel = mongoose.model('placeModel', placeSchema)
module.exports = placeModel