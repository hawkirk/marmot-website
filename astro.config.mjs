import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marmotmanuscript.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
});
