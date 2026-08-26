import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://engineering-portfolio.michaelmarquardt333.chatgpt.site',
  output: 'server',
  adapter: cloudflare(),
  build: {
    inlineStylesheets: 'always',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    optimizeDeps: {
      noDiscovery: true,
      include: [],
    },
    plugins: [
      {
        name: 'portfolio-disable-toolbar-deps',
        enforce: 'post',
        configResolved(config) {
          config.optimizeDeps.include = (config.optimizeDeps.include ?? []).filter(
            (entry) => !entry.includes('aria-query') && !entry.includes('axobject-query'),
          );
        },
      },
    ],
  },
});
