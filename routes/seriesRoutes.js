const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/seriesController')
const Serie = require('../models/seriesModel')

const models = { Serie }

router.get('/', seriesController.indexSerie.bind(null, models))
router.get('/new', seriesController.newSerie)
router.post('/new', seriesController.newSerieProcess.bind(null, models))
router.get('/update/:id', seriesController.updateSerie.bind(null, models))
router.post('/update/:id', seriesController.updateSerieProcess.bind(null, models))
router.get('/delete/:id', seriesController.deleteSerie.bind(null, models))


module.exports = router