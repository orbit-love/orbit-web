const BlocksToMarkdown = require('@sanity/block-content-to-html')
const groq = require('groq')
const Sanity = require('./sanityClient.js')
const serializers = require('./serializers')

function generatePost(post) {
  return {
    ...post,
    body: BlocksToMarkdown({
      blocks: post.body,
      serializers,
      ...Sanity.client.config(),
    }),
  }
}

async function getPosts() {
  const filter = groq`*[_type == "post" && publishedAt < now()]`
  const projection = groq`{
    "authors": authors[]->{image, name, title},
    body,
    description,
    keywords,
    mainImage,
    publishedAt,
    slug,
    socialImage,
    socialImageHeight,
    socialImageWidth,
    subhead,
    title
  }`
  const order = `| order(publishedAt desc)`
  const query = [filter, projection, order].join(' ')
  // const query = [filter, order].join(' ')
  const docs = await Sanity.client
    .fetch(query)
    .catch((err) => console.error(err))
  const preparePosts = docs.map(generatePost)
  return preparePosts
}

module.exports = getPosts
