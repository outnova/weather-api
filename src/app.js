const express = require('express')
const weatherRoutes = require('./routes/weatherRoutes')

const app = express()

app.use(express.json())
app.set('trust proxy', 1)

app.use('/weather', weatherRoutes)

module.exports = app