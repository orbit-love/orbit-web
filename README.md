# Eleventy Starter

A project scaffold for quickly starting a site build with:

- [Eleventy](https://11ty.dev) for templates and site generation
- [Webpack](https://webpack.js.org) for straightforward JS asset bundling.
- [Alpine JS](https://github.com/alpinejs/alpine) A rugged, minimal framework for composing JavaScript behavior in your markup.
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow
- [PurgeCSS](https://www.purgecss.com/) for optimizing css output
- [Netlify CLI](https://www.npmjs.com/package/netlify-cli) for Netlify dev pipeline and local replication of the prod environment

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)
- [Netlify CLI](https://www.npmjs.com/package/netlify-cli) _optional_

## Running locally

```bash
# Create your project
npx degit "eastslopestudio/eleventy-starter" my-app && cd my-app

# install the project dependencies
npm install

# run the build and server locally
npm run start

# run the production build
npm run build
```

## Netlify Dev

```bash
# Install the Netlify CLI globally
npm install -g netlify-cli
netlify dev
```

Serverless functions are located in `src/functions`

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- /.netlify/functions/hello

### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello

---

## Credits

My heartfelt thanks to these people, whom I shamelessly copied ideas from:

- Phil Hawksworth: [EleventyOne](https://github.com/philhawksworth/eleventyone)
- Mike Riethmuller: [Supermaya](https://github.com/MadeByMike/supermaya)
- Zach Leatherman: [zachleat.com](https://github.com/zachleat/zachleat.com)
- Max Böck [Eleventastic](https://github.com/maxboeck/eleventastic)
