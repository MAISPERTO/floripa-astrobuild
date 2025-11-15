// astro.config.mjs

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  // Configuração essencial de SSR (Server-Side Rendering)
  output: 'server',
  adapter: node({
    mode: 'standalone' 
  }),

  // FIX: Esta linha garante que o servidor se vincule a 0.0.0.0,
  // permitindo que o Coolify/Nixpacks o acesse dentro do container.
  server: {
    host: true, // Garante que se vincule a 0.0.0.0
    // A porta padrão para o Coolify/Nixpacks é 3000 ou 4321. 
    // Se você não especificar, o Astro usará a padrão (geralmente 4321), 
    // o que é fine, desde que o Coolify saiba. 
  },
  
  // Suas outras configurações/integrações, se houver, iriam aqui.
});