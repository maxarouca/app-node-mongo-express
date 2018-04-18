const mongoose = require('mongoose')

const SerieScheema = mongoose.Schema({
  name: String,
  status: {
    type: String,
    enumValues: ['to-watch', 'watched', 'watching']
  }
})

const Serie = mongoose.model('Serie', SerieScheema)

module.exports = Serie

// importa o mongoose, cria o scheema, cria o model baseado no scheema, exporta o model