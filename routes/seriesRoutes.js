const express = require('express')
const router = express.Router()
const seriesController = require('../controllers/seriesController')

router.get('/', seriesController.indexSerie)

router.get('/new', seriesController.newSerie)


module.exports = router