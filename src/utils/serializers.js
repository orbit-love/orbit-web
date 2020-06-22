const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

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
      }
    },
    code: (props) => ``,
    //   image: () => ``,
    //   instagram: (props) => ``,
    twitter: (props) => ``,
  },
}
