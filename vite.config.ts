import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";
import { getMetadataTags, getPageMetadata, metadataPaths } from './src/data/pageMetadata'

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderPageMetadata(html: string, pathname: string) {
  const { title, url } = getPageMetadata(pathname)
  const tags = getMetadataTags(pathname).map(({ attribute, key, content }) =>
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`
  )
  const head = [
    '<!-- page-metadata:start -->',
    `<title>${escapeHtml(title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    ...tags,
    '<!-- page-metadata:end -->',
  ].join('\n    ')
  return html.replace(/<!-- page-metadata:start -->[\s\S]*?<!-- page-metadata:end -->/, head)
}

function pageMetadata(): Plugin {
  let outputDirectory: string
  return {
    name: 'brknbrds-page-metadata',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir)
    },
    transformIndexHtml(html, context) {
      return renderPageMetadata(html, context.originalUrl ?? '/')
    },
    configurePreviewServer(server) {
      // Match Netlify's directory URLs so preview requests reach the generated pages.
      server.middlewares.use((request, response, next) => {
        const url = new URL(request.url ?? '/', 'http://localhost')
        if (url.pathname !== '/' && metadataPaths.includes(url.pathname)) {
          response.writeHead(301, { Location: `${url.pathname}/${url.search}` })
          response.end()
          return
        }
        next()
      })
    },
    async writeBundle(_options, bundle) {
      const entry = bundle['index.html']
      if (!entry || entry.type !== 'asset' || typeof entry.source !== 'string') {
        throw new Error('Cannot generate share metadata without the built index.html')
      }
      const html = entry.source
      // Netlify serves these real files before its SPA fallback; crawlers need no JavaScript.
      await Promise.all(metadataPaths.filter((path) => path !== '/').map(async (path) => {
        const directory = resolve(outputDirectory, path.slice(1))
        await mkdir(directory, { recursive: true })
        await writeFile(resolve(directory, 'index.html'), renderPageMetadata(html, path))
      }))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), pageMetadata()],
})
