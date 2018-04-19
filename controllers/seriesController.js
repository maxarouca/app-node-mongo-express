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

const indexSerie = async ({ Serie }, req, res) => {
  const docs = await Serie.find({})
  res.render('series/index', { series: docs, labels })
}

const newSerie = (req, res) => {
  res.render('series/new')
}

const newSerieProcess = async ({ Serie }, req, res) => {
  const serie = new Serie(req.body)
  await serie.save()
  res.redirect('/series')
}

const updateSerie = async ({ Serie }, req, res) => {  
  const serie = await Serie.findOne({ _id: req.params.id })
  res.render('series/update', { serie, labels })
}

const updateSerieProcess = async ({ Serie }, req, res) => {
  const serie = await Serie.findOne({ _id: req.params.id })
  serie.name = req.body.name
  serie.status = req.body.status
  await serie.save()
  res.redirect('/series')
}

const deleteSerie = async ({ Serie }, req, res) => {
  await Serie.remove({ _id: req.params.id })
  res.redirect('/series')
}


module.exports = {
  indexSerie, newSerie, newSerieProcess, updateSerie, updateSerieProcess, deleteSerie
}