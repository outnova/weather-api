require('dotenv').config()
const app = require('./src/app')
const redisClient = require('./src/config/redis')

const port = process.env.PORT || 3000

async function bootstrap() {
	try {
		await redisClient.connect()
		console.log('Connected to Redis...')

		app.listen(port, () => {
			console.log(`Weather API running on port ${port}`)
		})
  	} catch(error) {
		console.error('Failed to start:', error)
		process.exit(1)
  	}
}

bootstrap()