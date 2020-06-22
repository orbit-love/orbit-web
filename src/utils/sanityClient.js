const sanityClient = require('@sanity/client')

const projectId = process.env.SANITY_PROJECT_ID

module.exports = sanityClient({
  projectId,
  dataset: 'production',
  useCdn: true,
})
