const blocksToHtml = require('@sanity/block-content-to-html')
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
    image: ({ node }) => {
      const image = h('img', {
        src: Sanity.urlFor(Sanity.client, node)
          .width(node.width)
          .height(node.height)
          .url(),
        alt: node.alt,
        title: node.title,
      })
      const link = node.href && h('a', { href: node.href }, image)
      const content = h(
        'div',
        {
          style: `width: ${node.width ? node.width + 'px' : '100%'}`,
        },
        link || image
      )

      return content
    },
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
    subscribeForm: ({ node }) =>
      h('div', {
        id: node.id,
        className: 'subscribe-form-placeholder',
      }),
  },
}
