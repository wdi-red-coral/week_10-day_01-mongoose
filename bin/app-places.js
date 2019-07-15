'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-crud', {
  useMongoClient: true
})
const Place = require('../models/Place.js')
const db = mongoose.connection

const done = function () { // eslint-disable-line no-unused-vars
  db.close()
}

// CRUD Actions
const create = function (name, latitude, longitude, country) {
  const PlaceParams = {
    name: name,
    latitude: latitude,
    longitude: longitude,
    country: country

  }
  Place.create(PlaceParams)
  .then(Place => console.log(Place.toJSON()))
  .catch(console.error)
  .then(done)
}

const index = function () {
  Place.find()
  .then((country) => {
    country.forEach(country => console.log(country.toJSON()))
  })
  .catch(console.error)
  .then(done)
}

const show = function (id) {
  Place.findById(id)
  .then(Place => console.log(Place.toJSON()))
  .catch(console.error)
  .then(done)
}

const update = function (id, field, value) {
  Place.findById(id)
  .then(Place => {
    Place[field] = value
    return Place.save()
  })
  .then(Place => console.log(Place.toJSON()))
  .catch(console.error)
  .then(done)
}

const destroy = function (id) {
  Place.findById(id)
  .then(place => place.remove())
  .catch(console.error)
  .then(done)

}

// UI
db.once('open', function () {
  const command = process.argv[2]

  let field
  let id

  switch (command) {
    case 'create':
      const name = process.argv[3]
      const latitude = process.argv[4]
      const longitude = process.argv[5]
      const country = process.argv[6]

      create(name, latitude, longitude, country)

      break

    case 'show':
      id = process.argv[3]
      show(id)
      break

    case 'update':
      id = process.argv[3]
      field = process.argv[4]
      const value = process.argv[5]
      update(id, field, value)
      break

    case 'destroy':
      id = process.argv[3]
      destroy(id)
      break

    default:
      index()
      break
  }
})
module.exports = Place;