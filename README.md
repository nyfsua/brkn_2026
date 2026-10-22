# React + TypeScript + Vite

## Brknbrds sharing previews

Sharing metadata lives in `src/data/pageMetadata.ts`. The desktop landing photograph
in `public/social/` is used by both the homepage hero and all Open Graph / Twitter
image cards. The mobile hero keeps its separate portrait photograph.

The `brknbrds-page-metadata` plugin in `vite.config.ts` writes metadata into the
initial HTML in development and at build time. A production build also creates
an `index.html` for each existing page and catalogue product. Netlify serves
these files ahead of an unforced SPA fallback, so link crawlers can read each
page's title and description without running React. Keep these generated route
directories when publishing `dist`; do not replace them with a forced wildcard
rewrite. Local production preview follows the same trailing-slash URLs.

Verify with `npm run build`, `npm run lint`, and `npm run preview`. Inspect the
HTTP response or page source, not only the hydrated browser DOM. After a future
deployment, verify that the absolute `og:image` URL responds with the JPEG and
check fresh shares; services can cache older cards.

No video metadata is advertised yet. When a real public HTTPS video is ready,
add its `og:video` URL, MIME type and dimensions to the shared metadata and keep
`og:image` as the still-image fallback. Test the actual target services before
promising inline playback: support varies by service. See the
[Open Graph specification](https://ogp.me/) and
[Apple's Messages preview guidance](https://developer.apple.com/documentation/technotes/tn3156-create-rich-previews-for-messages).

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
