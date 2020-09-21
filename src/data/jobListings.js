const getJobListings = require('../../sanity/getJobListings')

module.exports = async function () {
  return await getJobListings()
}
