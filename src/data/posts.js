const getPosts = require('../../sanity/getPosts')

module.exports = async function () {
  return await getPosts()
}
