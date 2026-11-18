import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Replace with your real domain, including https://
export default defineConfig({ site: 'https://eduardoxmunoz.com', integrations: [sitemap()] });
