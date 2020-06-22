const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h
const Sanity = require('./sanityClient')

module.exports = {
  list: ({ type, children }) => {
    switch (type) {
      case 'bullet':
        return h('ul', { className: 'mb-4 ml-3 pl-6' }, children)
    }
  },
  listItem: ({ children }) => {
    return h('li', { className: 'list-disc leading-7 text-lg' }, children)
  },
  marks: {
    link: ({ mark, children }) =>
      h('a', { href: mark.href, className: 'text-purple-600' }, children),
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
            { className: 'mt-10 mb-5 text-3xl font-bold leading-9' },
            children
          )
        case 'h2':
          return h(
            'h2',
            { className: 'mt-10 mb-5 text-3xl font-bold leading-9' },
            children
          )
        case 'h3':
          return h(
            'h3',
            { className: 'mt-10 mb-5 text-2xl font-bold leading-8' },
            children
          )
        case 'normal':
          return h('p', { className: 'text-lg mb-5' }, children)
        case 'blockquote':
          return h(
            'blockquote',
            {
              className:
                'bg-gray-100 rounded border-l-4 border-purple-400 mb-6 py-4 px-6',
            },
            h(
              'p',
              { className: 'text-gray-600 italic' },
              h('strong', {}, children)
            )
          )
      }
    },
    code: ({ node }) => {},
    image: ({ node }) => {
      const image = h('img', {
        src: Sanity.urlFor(Sanity.client, node)
          .width(node.width)
          .height(node.height)
          .url(),
        alt: node.alt,
        className: 'w-full',
        title: node.title,
      })
      const link =
        node.href && h('a', { href: node.href, className: 'block' }, image)
      const content = h(
        'div',
        {
          className: `border border-gray-300 p-2 my-6 max-w-full ${
            node.width ? 'mx-auto' : 'mx-0'
          }`,
          style: `width: ${node.width ? node.width + 'px' : '100%'}`,
        },
        link || image
      )

      return content
    },
    //   instagram: (props) => ``,
    twitter: (props) => ``,
  },
}
