// src/lib/directus.ts
import { createDirectus, rest } from '@directus/sdk';

// A URL é estática e aponta para o seu CMS central
const client = createDirectus('https://directus.maisperto.com.br').with(rest());

export default client;