const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/pagesController')

router.get('/', pagesController.index)

router.get('/sobre', pagesController.sobre)


module.exports = router