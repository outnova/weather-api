const express = require('express')
const router = express.Router()
const weatherController = require('../controllers/weatherController')
const weatherLimiter = require('../middlewares/rateLimiter')

router.get('/', weatherLimiter, weatherController.getWeather)

module.exports = router