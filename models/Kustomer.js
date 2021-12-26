const mongoose = require('mongoose')

const Kustomer = mongoose.model('Kustomer', {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nama: {
    type: String,
  },
  telepon: {
    type: Number,
  }
})

module.exports = Kustomer