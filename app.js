const express = require('express')
const bodyParser = require('body-parser')
const md5 = require('md5')

const Kustomer = require('./models/Kustomer.js')
const Lapang = require('./models/Lapang.js')
const Sewa = require('./models/Sewa.js')

require('./configs/db.js')

const app = express()
const port = 1234

// PARSING BODY VALUE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// SET ROUTE ROOT
app.get('/', (req, res) => {
  return res.json({
    greeting: 'Hello!',
    message: 'This is root'
  })
})

// GET ALL KUSTOMER DATA
app.get('/kustomer', (req, res) => {
  Kustomer.find((error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (data.length === 0) {
      return res.json({
        status: 'Error',
        message: 'No data available'
      })
    }

    res.json({
      status: 'Success',
      message: 'Data retrieved',
      data: data
    })
  })
})

// GET KUSTOMER BY ID
app.get('/kustomer/:_id', (req, res) => {
  Kustomer.findOne({
    _id: req.params._id
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Data retrieved',
      data: data
    })
  })
})

// ADD DATA KUSTOMER
app.post('/kustomer', (req, res) => {
  Kustomer.insertMany({
    username: req.body.username,
    password: md5(req.body.password),
    nama: req.body.nama,
    telepon: req.body.telepon
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    res.json({
      status: 'Success',
      message: 'New Kustomer has been added',
      data: data
    })
  })
})

// DELETE DATA KUSTOMER BY ID
app.delete('/kustomer/:_id', (req, res) => {
  Kustomer.deleteOne({
    _id: req.params._id
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Kustomer data has been deleted'
    })
  })
})

// UPDATE DATA KUSTOMER BY ID
app.put('/kustomer/:_id', (req, res) => {
  var _id = req.params._id

  Kustomer.findByIdAndUpdate(
    _id,
    req.body,
    { useFindAndModify: false },
  ).then(data => {
    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Kustomer data has been updated'
    })
  })
})

// GET ALL LAPANG DATA
app.get('/lapang', (req, res) => {
  Lapang.find((error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (data.length === 0) {
      return res.json({
        status: 'Error',
        message: 'No data available'
      })
    }

    res.json({
      status: 'Success',
      message: 'Data retrieved',
      data: data
    })
  })
})

// GET LAPANG BY ID
app.get('/lapang/:_id', (req, res) => {
  Lapang.findOne({
    _id: req.params._id
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Data retrieved',
      data: data
    })
  })
})

// ADD DATA LAPANG
app.post('/lapang', (req, res) => {
  Lapang.insertMany({
    tipe_lapang: req.body.tipe_lapang,
    harga_sewa: req.body.harga_sewa
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    res.json({
      status: 'Success',
      message: 'New Lapang has been added',
      data: data
    })
  })
})

// DELETE DATA LAPANG BY ID
app.delete('/lapang/:_id', (req, res) => {
  Lapang.deleteOne({
    _id: req.params._id
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Lapang data has been deleted'
    })
  })
})

// UPDATE DATA LAPANG BY ID
app.put('/lapang/:_id', (req, res) => {
  var _id = req.params._id

  Lapang.findByIdAndUpdate(
    _id,
    req.body,
    { useFindAndModify: false },
  ).then(data => {
    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Lapang data has been updated'
    })
  })
})

// GET ALL SEWA
app.get('/sewa', (req, res) => {
  Sewa.find((error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (data.length === 0) {
      return res.json({
        status: 'Error',
        message: 'No data available'
      })
    }

    res.json({
      status: 'Success',
      message: 'Data retrieved',
      data: data
    })
  })
})

// GET SEWA BY ID
app.get('/sewa/:_id', (req, res) => {
  Sewa.findOne({
    _id: req.params._id
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Data retrieved',
      data: data
    })
  })
})

// ADD DATA SEWA
app.post('/sewa', (req, res) => {
  Sewa.insertMany({
    nama: req.body.nama,
    tipe_lapang: req.body.tipe_lapang,
    lama_sewa: req.body.lama_sewa,
    // total_harga_sewa:
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    res.json({
      status: 'Success',
      message: 'New Sewa has been added',
      data: data
    })
  })
})

// DELETE DATA SEWA BY ID
app.delete('/sewa/:_id', (req, res) => {
  Sewa.deleteOne({
    _id: req.params._id
  }, (error, data) => {
    if (error) {
      return res.json({
        status: 'Error',
        message: error
      })
    }

    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Sewa data has been deleted'
    })
  })
})

// UPDATE DATA SEWA BY ID
app.put('/sewa/:_id', (req, res) => {
  var _id = req.params._id

  Sewa.findByIdAndUpdate(
    _id,
    req.body,
    { useFindAndModify: false },
  ).then(data => {
    if (!data) {
      return res.json({
        status: 'Error',
        message: 'Data not found'
      })
    }

    res.json({
      status: 'Success',
      message: 'Sewa data has been updated'
    })
  })
})

app.listen(port, () => {
  console.log(`Penyewaan Lapang Futsal | This app is listening at http://127.0.0.1:${port}`)
})