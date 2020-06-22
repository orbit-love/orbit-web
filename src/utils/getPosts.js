const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('./sanityClient.js')
const serializers = require('./serializers')

function generatePost(post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.body, { serializers, ...client.config() }),
  }
}

async function getPosts() {
  const filter = groq`*[_type == "post" && publishedAt < now()]`
  // const projection = groq`{
  //   _id,
  //   publishedAt,
  //   title,
  //   slug,
  //   body[]{
  //     ...,
  //     children[]{
  //       ...,
  //       // Join inline reference
  //       _type == "authorReference" => {
  //         // check /studio/documents/authors.js for more fields
  //         "name": @.author->name,
  //         "slug": @.author->slug
  //       }
  //     }
  //   },
  //   "authors": authors[].author->
  // }`
  const order = `| order(publishedAt desc)`
  // const query = [filter, projection, order].join(' ')
  const query = [filter, order].join(' ')
  const docs = await client.fetch(query).catch((err) => console.error(err))
  const preparePosts = docs.map(generatePost)
  return preparePosts
}

module.exports = getPosts
