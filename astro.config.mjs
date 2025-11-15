// astro.config.mjs

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// IMPORTANTE: Definir o output como 'server' e usar o adapter Node.js
// é o que transforma seu site de estático para dinâmico (server-side rendering),
// o que é essencial para rodar no Coolify/Nixpacks.

export default defineConfig({
  // 1. Configuração do Output: Define que o Astro deve gerar arquivos para um servidor
  output: 'server',
  
  // 2. Configuração do Adapter: Diz ao Astro para usar o ambiente Node.js
  adapter: node({
    mode: 'standalone' 
  }),

  // Se você tiver outras integrações ou configurações globais (como site: '...', etc.),
  // elas devem ser adicionadas aqui. Caso contrário, esta configuração minimalista é suficiente.
});