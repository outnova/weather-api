const rateLimit = require('express-rate-limit')

const weatherLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 10,
	message: {
		error: 'Too many requests, try again later.'
	},
	standardHeaders: true,
	legacyHeaders: false,
})

module.exports = weatherLimiter