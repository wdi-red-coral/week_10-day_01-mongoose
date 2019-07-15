'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-crud', {
  useMongoClient: true
})
const db = mongoose.connection
const Pleace = require('../models/pleaces.js')

const done = function () { // eslint-disable-line no-unused-vars
  db.close()
}

// CRUD Actions
const create = function (name, latitude, longitude, country) {
  /* Add Code Here */
  const pleaceParams={
    name : name,
    latitude:latitude ,
    longitude :longitude,
    country:country
  }
  Pleace.create(pleaceParams)
  .then(pleace=>console.log(pleace.toJSON()))
  .catch(console.error)
  .then(done)

}

const index = function () {
  /* Add Code Here */

  Pleace.find()
  .then((pleace)=>{
    pleace.forEach(pleace => console.log(pleace.toJSON()));
  })
  .catch(console.error)
  .then(done)
}

const show = function (id) {
  /* Add Code Here */
  Pleace.findById(id)
  .then(pleace => console.log(pleace.toJSON()))
  .catch(console.error)
  .then(done)
}

const update = function (id, field, value) {
  /* Add Code Here */

  Pleace.findById(id)
  .then(pleace => {
    pleace[field] = value
    return pleace.save()
  })
  .then(pleace => console.log(pleace.toJSON()))
  .catch(console.error)
  .then(done)
}

const destroy = function (id) {
  /* Add Code Here */

  Please.findById(id)
  .then(please => please.remove())
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
