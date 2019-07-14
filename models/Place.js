const mongoose = require("mongoose");
//new schema 
const placeSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        min:0
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
      country: {
          type: String,
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
})
placeSchema.virtual('isNorthernHemisphere?').get(function () {
    return this.latitude > 0
  })
  
  placeSchema.virtual('isWesternHemisphere?').get(function () {
    return this.longitude < 0
  })
const Place = mongoose.model('Person', placeSchema);
module.exports = Place;