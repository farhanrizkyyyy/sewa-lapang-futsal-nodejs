const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/uas_mbd'

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})