const mongooes = require('mongoose');

const personSchema = new mongooes.Schema({
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
        require: true,
        min: 0
    },
    weight: {
        type: Number,
        require: true,
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

personSchema.virtual("name.full").get(function () {
    return this.name.firstName + " " + this.name.lastName
})

const Person = mongooes.model("Person", personSchema)

module.exports = Person
