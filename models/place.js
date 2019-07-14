const mongoose = require('mongoose');


const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    country: {
        type: String
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

placeSchema.virtual('isNorthernHemisphere').get( () => {
    return this.latitude > 0
});

placeSchema.virtual('isWesternHemisphere').get( () => {
    return this.longitude < 0
});


const Place = mongoose.model('Place', placeSchema);


module.exports = Place;