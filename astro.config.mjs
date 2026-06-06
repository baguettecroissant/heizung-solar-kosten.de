import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://heizung-solar-kosten.de',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
