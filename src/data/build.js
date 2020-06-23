require('dotenv').config()

module.exports = {
  env: process.env.ELEVENTY_ENV,
  timestamp: new Date(),
  url: process.env.URL || 'https://orbit.love',
}
