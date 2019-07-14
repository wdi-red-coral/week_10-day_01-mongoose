const mongoose = require('mongoose');

const placesSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  latitude : {
    type : Number,
    min : -90,
    max : 90,
    required: true
  },
  longitude : {
    type : Number,
    min : -180,
    max : 180,
    required : true
  },
  country : {
    type : String,
    required : true,
  },
},
  {
    timestamps: true,
  toObject :
{
  virtuals : true
}
,
toJSON : {
  virtuals : true
}
  })

const Places = mongoose.model("Places" , placesSchema);
module.exports = Places
