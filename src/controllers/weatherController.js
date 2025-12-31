const redisClient = require('../config/redis')
const weatherService = require('../services/weatherService')

const getWeather = async (req, res) => {
    try {
		const city = req.query.city || 'New York'
		const cacheKey = `weather:${city.toLowerCase()}`

		const cachedData = await redisClient.get(cacheKey)

		if (cachedData) {
			console.log(`${city} data from REDIS`)
			return res.json({
				source: 'Redis',
				data: JSON.parse(cachedData)
			})
		}

		console.log(`Fetching extern API from ${city}...`)

		//console.log(`Weather for: ${city}...`)

		const data = await weatherService.getExternalWeatherData(city)

		await redisClient.set(cacheKey, JSON.stringify(data), {
			EX: 3600
		})

		return res.json({
			source: 'Extern API',
			data: data
		})
	}
	catch(error) {
		console.error('Error:', error.message)
		res.status(500).json({ error: 'API Error'})
	}
}

module.exports = { getWeather }