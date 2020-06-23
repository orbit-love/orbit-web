# Orbit Website

Built with the following technologies (thanks to this wonderful [Eleventy Starter](https://github.com/eastslopestudio/eleventy-starter)):

- [Eleventy](https://11ty.dev) for templates and site generation
- [Webpack](https://webpack.js.org) for straightforward JS asset bundling.
- [Alpine JS](https://github.com/alpinejs/alpine) A rugged, minimal framework for composing JavaScript behavior in your markup.
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow
- [PurgeCSS](https://www.purgecss.com/) for optimizing css output
- [Vercel CLI](https://vercel.com/docs/cli) for Vercel dev pipeline and local replication of the prod environment
- [Sanity](https://sanity.io) for a powerful, highly customizable CMS

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)
- [Vercel CLI](https://vercel.com/docs/cli) _optional_

## Running locally

```bash
# Clone the project
git clone git@github.com:orbit-love/orbit-web-v2.git && cd orbit-web-v2

# install the project dependencies
yarn

# run the build and server locally
vercel dev --listen 8080

# run the production build
yarn build
```
