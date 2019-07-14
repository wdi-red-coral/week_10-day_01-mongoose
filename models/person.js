'use strict'
const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
    // places: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
    name:{
        firstName: {
            type: String,
            required: true,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    height:{
        type:Number, 
        required:true,
        min:0
    },
    weight:{
        type:Number, 
        required:true,
        min:0
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
/** 
 * START creating (virtual, model and table)
*/
personSchema.virtual('name.full').get(function(){
    return this.name.firstName + ' ' + this.name.lastName
})
const personModel = mongoose.model('personModel', personSchema)

// personModel.find({}).populate('places').exec(function(err, persons) {
//     if(err) console.log(err);
//     else console.log(persons);
// }) 
module.exports = personModel