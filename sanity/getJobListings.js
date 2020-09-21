const BlocksToMarkdown = require('@sanity/block-content-to-html')
const groq = require('groq')
const Sanity = require('./sanityClient.js')
const serializers = require('./serializers')

function generateJobListings(jobListing) {
  return {
    ...jobListing,
    body: BlocksToMarkdown({
      blocks: jobListing.body,
      serializers,
      ...Sanity.client.config(),
    })
  }
}

async function getJobListings() {
  const filter = groq`*[_type == "jobListing" && publishedAt < now()]`
  const projection = groq`{
    role,
    slug,
    "type": type[]->{name, color},
    "status": status[]->{name, color},
    "skills": skills[]->{name, color},
    body,
    description,
    publishedAt,
  }`
  const order = `| order(publishedAt desc)`
  const query = [filter, projection, order].join(' ')
  // const query = [filter, order].join(' ')
  const docs = await Sanity.client
    .fetch(query)
    .catch((err) => console.error(err))
  const prepareJobListings = docs.map(generateJobListings)
  return prepareJobListings
}

module.exports = getJobListings
