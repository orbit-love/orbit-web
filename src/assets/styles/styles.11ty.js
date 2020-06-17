const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const cssnano = require('cssnano')

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /assets folder.
const fileName = 'main.css'

const purgecss = require('@fullhuman/postcss-purgecss')({
  // content relative to /dist
  content: [
    './src/assets/js/**/*.js',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.html',
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  },
})

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, fileName)
    return {
      permalink: `assets/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
      eleventyExcludeFromCollections: true,
    }
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      require('postcss-import')({
        addModulesDirectories: [
          path.resolve(path.join(__dirname, 'node_modules')),
        ],
      }),
      require('tailwindcss')('./tailwind.config.js'),
      require('postcss-nested'),
      require('autoprefixer'),
      ...(process.env.ELEVENTY_ENV === 'production' ? [purgecss, cssnano] : []),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css)
  }
}
