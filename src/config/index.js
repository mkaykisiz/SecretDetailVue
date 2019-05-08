const env = require('dotenv')
const config = {}


// Environment Variables
env.config()

config.G_API_KEY = process.env.VUE_APP_G_API_KEY

module.exports = config
