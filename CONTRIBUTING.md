## This is an opinionated project

- Do not use typescript.
- Javascript with semi-colons.
- Enforce specific coding styles using [EditorConfig](https://editorconfig.org/) and [Prettier](https://prettier.io/). Please set up your editor to work with those two.
- Uses CSS modules for separation of content, style, and logic. No exception.
- Uses [Normalize.css](https://necolas.github.io/normalize.css/). No exception.
- Uses [PostCSS](https://postcss.org/).
- Important files. DO NOT DELETE:
  - **`src/styles/global.module.css`**: PostCSS environment presets.
  - **`src/styles/animations.css`**: All common CSS animations goes here.
  - **`src/components/layout.module.css`**: Site-wide CSS rules.
  - **`src/components/layout.js`**: Site-wide imports and common HTML structure.
