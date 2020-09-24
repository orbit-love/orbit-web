const blocksToHtml = require('@sanity/block-content-to-html')
const fetch = require('node-fetch')
const h = blocksToHtml.h
const Sanity = require('./sanityClient')

module.exports = {

  marks: {
    inlineimage: ({ mark, children }) => {
      switch (mark._type) {
        case 'inlineimage':
          if (mark.asset) {
            return h('img', { src: mark.asset.url, alt: children[0] })
          } else {
            return null
          }
      }
    },
  },
  types: {
    code: ({ node }) => {
      return h(
        'pre',
        {},
        h('code', { className: `language-${node.language}` }, node.code)
      )
    },
    instagram: ({ node }) =>
      h('div', { 'data-url': node.url, className: 'instagram my-6' }),
    twitter: ({ node }) => h('div', { id: node.id, className: 'tweet my-6' }),
  },
}
