// astro.config.mjs

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Configuração essencial de SSR (Server-Side Rendering)
  output: 'server',
  adapter: node({
    mode: 'standalone' 
  }),

// >>> CORREÇÃO CRUCIAL
  server: {
    host: true, // Força a vinculação a 0.0.0.0
  },
  // ...
});