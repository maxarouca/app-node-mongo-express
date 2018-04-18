const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const mongo = 'mongodb://localhost/minhas-series'
const indexRoutes = require('./routes/indexRoute')
// Express configs
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Routes 
app.use('/', indexRoutes)

// Start server
mongoose
  .connect(mongo)
  .then( () => {
    app.listen(port, () => console.log('Minhas Séries listening on port' + port))
  })
  .catch( (err) => console.log(err))