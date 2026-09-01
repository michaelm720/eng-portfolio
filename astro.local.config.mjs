import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
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
