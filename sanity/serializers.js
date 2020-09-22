const blocksToHtml = require('@sanity/block-content-to-html')
const fetch = require('node-fetch')
const h = blocksToHtml.h
const Sanity = require('./sanityClient')

module.exports = {
  list: ({ type, children }) => {
    switch (type) {
      case 'bullet':
        return h('ul', {}, children)
    }
  },
  listItem: ({ children }) => {
    return h('li', {}, children)
  },
  marks: {
    link: ({ mark, children }) =>
      h('a', { href: mark.href,}, children),
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
    block: ({ node, children }) => {
      switch (node.style) {
        case 'h1':
          return h(
            'h1',
            {},
            children
          )
        case 'h2':
          return h(
            'h2',
            {},
            children
          )
        case 'h3':
          return h(
            'h3',
            {},
            children
          )
        case 'normal':
          return h('p', {}, children)
        case 'blockquote':
          return h(
            'blockquote',
            {},
            h(
              'p',
              {},
              children
            )
          )
      }
    },
    code: ({ node }) => {
      return h(
        'pre',
        {},
        h('code', { className: `language-${node.language}` }, node.code)
      )
    },
    image: ({ node }) => {
      const image = h('img', {
        src: Sanity.urlFor(Sanity.client, node)
          .width(node.width)
          .height(node.height)
          .url(),
        alt: node.alt,
        title: node.title,
      })
      const link =
        node.href && h('a', { href: node.href}, image)
      const content = h(
        'div',
        {
          style: `width: ${node.width ? node.width + 'px' : '100%'}`,
        },
        link || image
      )

      return content
    },
    instagram: ({ node }) =>
      h('div', { 'data-url': node.url, className: 'instagram my-6' }),
    twitter: ({ node }) => h('div', { id: node.id, className: 'tweet my-6' }),
  },
}
