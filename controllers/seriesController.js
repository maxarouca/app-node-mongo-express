const Serie = require('../models/seriesModel')

const indexSerie = (req, res) => {
  
  Serie.find({}, (err, docs) => {
    res.render('series/index', { series: docs })
  })
}

const newSerie = (req, res) => {
  const serie = new Serie({
    name: 'Chicago Med',
    status: 'watching'
  })
  serie.save(() => console.log('saved'))
  res.render('series/new')
}

module.exports = {
  indexSerie, newSerie
}