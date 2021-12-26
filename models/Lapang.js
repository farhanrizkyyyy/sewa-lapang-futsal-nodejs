const mongoose = require('mongoose')

const Lapang = mongoose.model('Lapang', {
  tipe_lapang: {
    type: String,
    required: true,
    maxLenght: 1
  },
  harga_sewa: {
    type: Number,
    required: true
  }
})

module.exports = Lapang