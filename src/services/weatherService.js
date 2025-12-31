const axios = require('axios')

async function getExternalWeatherData(city) {  
	const API_KEY = process.env.API_KEY
	const encodedCity = encodeURIComponent(city)
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedCity}/today?unitGroup=us&key=${API_KEY}&contentType=json`

	const response = await axios.get(url)
	return response.data
}

module.exports = { getExternalWeatherData }