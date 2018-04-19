const labels = [{
    id: 'watched',
    name: 'Assistida'
  },
  {
    id: 'to-watch',
    name: 'Para Assistir'
  },
  {
    id: 'watching',
    name: 'Assistindo'
  }
]

const indexSerie = ({ Serie }, req, res) => {
  Serie.find({}, (err, docs) => {
    res.render('series/index', { series: docs, labels })
  })
}

const newSerie = (req, res) => {
  res.render('series/new')
}

const newSerieProcess = ({ Serie }, req, res) => {
  const serie = new Serie(req.body)
  serie.save(() => res.redirect('/series'))
}

const updateSerie = ({ Serie }, req, res) => {  
  Serie.findOne({
    _id: req.params.id
  }, (err, serie) => {
    res.render('series/update', { serie, labels })
  })
}

const updateSerieProcess = ({ Serie }, req, res) => {

  Serie.findOne({
    _id: req.params.id
  },
  (err, serie) => {
    serie.name = req.body.name
    serie.status = req.body.status
    serie.save()
    res.redirect('/series')
  })
}

const deleteSerie = ({ Serie }, req, res) => {
  Serie.remove({
    _id: req.params.id
  }, () => res.redirect('/series'))
}


module.exports = {
  indexSerie, newSerie, newSerieProcess, updateSerie, updateSerieProcess, deleteSerie
}