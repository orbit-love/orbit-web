const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')

const projectId = process.env.SANITY_PROJECT_ID

module.exports = {
  client: sanityClient({
    projectId,
    dataset: 'production',
    useCdn: true,
  }),
  urlFor(client, source) {
    return imageUrlBuilder(client).image(source)
  },
}
