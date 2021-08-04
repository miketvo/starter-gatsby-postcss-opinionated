<div align="center" style="display: flex; justify-content: center; align-items: center; margin-top: 60px;">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" height="60" />
  </a>
  <div style="margin: 16px; font-size: 32px; font-weight: bold">+</div>
  <a href="https://postcss.org">
    <img alt="PostCSS" src="https://raw.githubusercontent.com/postcss/brand/master/dist/postcss-logo-symbol.svg" width="60" height="60" />
  </a>  
</div>
<h1 align="center" style="text-align: center">
  A Gatsby + PostCSS bare-bone opinionated starter.
</h1>

## 🤔 How opinionated?

- Doesn't use typescript.
- Javascript with semi-colons.
- Enforce specific coding styles using [EditorConfig](https://editorconfig.org/) and [Prettier](https://prettier.io/).
- Uses CSS modules for separation of content, style, and logic.
- Uses [Normalize.css](https://necolas.github.io/normalize.css/).
- Uses [PostCSS](https://postcss.org/).
- Important files:
  - **`src/styles/global.module.css`**: PostCSS environment presets.
  - **`src/styles/animations.css`**: All common CSS animations goes here.
  - **`src/components/layout.module.css`**: Site-wide CSS rules.
  - **`src/components/layout.js`**: Site-wide imports and common HTML structure.

## 📦 Dependencies

- `prop-types`
- `react`
- `react-dom`
- `react-helmet`
- `gatsby-plugin-gatsby-cloud`
- `gatsby-plugin-image`
- `gatsby-plugin-image`
- `gatsby-plugin-manifest`
- `gatsby-plugin-offline`
- `gatsby-plugin-postcss`
- `gatsby-plugin-react-helmet`
- `gatsby-plugin-sharp`
- `gatsby-source-filesystem`
- `gatsby-transformer-sharp`
- `normalize.css`
- `postcss`
- `postcss-preset-env`

## 🚀 Quick start

1. **Create a Gatsby site.**

   Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a
   new site, specifying this starter.

   ```shell
   # create a new Gatsby site using this starter
   gatsby new my-project https://github.com/miketvo/starter-gatsby-postcss-opinionated
   ```

1. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```shell
   cd my-project/
   npm run develop
   ```

1. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment
   with querying your data. Learn more about using this tool in
   the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

   Open the `my-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your
   changes and the browser will update in real time!

## 🧐 What's inside?

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .editorconfig
    ├── .gitignore
    ├── .prettierrc
    ├── .prettierignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    └── README.md

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages)
   are automatically installed.

2. **`/src`**: This directory contains all of the code related to what you will see on the front-end of your site (
   what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`/static`**: This directory contains all of the static assets not processed by Gatsby.

4. **`.editorconfig`**: This is a coding style configuration file for your code editor. Read
   more: [EditorConfig](https://editorconfig.org/).

5. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep
   the formatting of your code consistent.

7. **`.prettierignore`**: This file tells Prettier which file to ignore formatting.

8. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of
   the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension
   of default Gatsby settings affecting the browser.

9. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify
   information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to
   include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

10. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of
    default Gatsby settings affecting pieces of the site build process.

11. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization
    of default Gatsby settings affecting server-side rendering.

12. **`LICENSE`**: All rights reserved

13. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the
    exact versions of your npm dependencies that were installed for your project. **(You won’t change this file
    directly).**

14. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name,
    author, etc). This manifest is how npm knows which packages to install for your project.
15. **`postcss.config.js`**: Config file for PostCSS (This project uses PostCSS extensively).

16. **`README.md`**: A text file containing useful reference information about this project.
