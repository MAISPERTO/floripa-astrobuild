// @ts-check
import { defineConfig } from 'astro/config';

// 1. Acessa a variável de ambiente definida no .env
// O `process.env` acessa a variável de ambiente durante a execução do comando de build.
const CITY_DOMAIN = process.env.PUBLIC_CITY_DOMAIN || 'localhost:4321'; 

// 2. Constrói o URL completo
const SITE_URL = `https://${CITY_DOMAIN}`;

// 3. Define a configuração do Astro
export default defineConfig({
  // Mantemos 'static' para garantir o modo SSG (Static Site Generation), que é o de maior performance.
  output: 'static',
  
  // O campo 'site' é agora dinâmico, baseado na variável de ambiente
  site: SITE_URL,
});