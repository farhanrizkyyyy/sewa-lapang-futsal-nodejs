const mongoose = require('mongoose')

const Sewa = mongoose.model('Sewa', {
  nama: {
    type: String,
    required: true,
  },
  tipe_lapang: {
    type: String,
    required: true,
  },
  lama_sewa: {
    type: Number,
    required: true,
    maxLength: 1,
  }
})

module.exports = Sewa