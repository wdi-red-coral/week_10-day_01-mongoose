const mongoose = require('mongoose');

const plaseSchema = new mongoose.Schema({

  country: {
    type: String
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
  name:{
    type: String,
    required: true
  }

  
}, {
  toJSON:{
    virtuals: true
  },
  toObject:{
    virtuals: true
  }
})


plaseSchema.virtual('isNorthernHemisphere').get(() => this.latitude > 0);
plaseSchema.virtual('isWesternHemisphere').get(() => this.longitude < 0);

const Plase = mongoose.model('Plase', plaseSchema)

module.exports = Plase