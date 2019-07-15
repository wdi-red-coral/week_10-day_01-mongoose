// 'use strict'
const mongoose = require("mongoose");
const placesSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        
    },
    latitude: {
        type:Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude:{
        type:Number,
        required:true,
        min: -180,
        max: 180
    }
  },{
    timestamps:true,
    toObject: {virtuals:true},
    toJSON: {virtuals:true}
  });

  placeSchema.virtual('isNorthernHemisphere?').get(function () {
    return this.latitude > 0
  })

  
placeSchema.virtual('isWesternHemisphere?').get(function () {
    return this.longitude < 0
  })


const Places = mongoose.model('Places',placesSchema)
module.exports = Places

