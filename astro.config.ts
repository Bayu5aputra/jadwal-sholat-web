import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site:
    process.env.PUBLIC_SITE_URL
      ? process.env.PUBLIC_SITE_URL
      : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://sholat.next-it.my.id/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
