const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/mongoose-crud', {
useMongoClient: true})

const db = mongoose.connection
const Place = require('../models/place.js')
const done = function () {db.close()}

const create = function (name, latitude, longitude, country) {
const placeParams = {
   
   name,
   latitude,
   longitude,
   country}

 Place.create(placeParams)
 .then(place => console.log(place),error => console.error)
 .then(done)}

const index = function () {Place.find()
 .then(places => places.forEach(
  place => console.log(place)),error => console.error)
 .then(done)}

const show = function (id) {Place.findById(id)
 .then(place => console.log(place.toJSON()),
  error => console.error)
 .then(done)}

const update = function (id, field, value) {Place.findById(id)
 .then(place => {place[field] = value;
  return place.save()},error => console.error)
 .then(done)}

const destroy = function (id) {Place.findById(id)
 .then(place => place.remove(),error => console.error)
 .then(done)}

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
   break }})

module.exports = Place;