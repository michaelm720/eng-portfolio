import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  build: {
    inlineStylesheets: 'always',
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    optimizeDeps: {
      noDiscovery: true,
      include: ['performative-ui', 'react', 'react-dom/client'],
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
