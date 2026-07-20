// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwind from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://JustinL284.github.io',
  base: '/personal-portfolio',
  server: { port: 6767, host: true},

  fonts: [{
      provider: fontProviders.local(),
      name: "ClashDisplay-Variable",
      cssVariable: "--font-clash-display",
      options: {
      variants: [{
          src: ['./src/fonts/ClashDisplay-Variable.ttf'],
          weight: "100 900",
          style: 'normal'
      }]
      }
  },
  {
      provider: fontProviders.local(),
      name: "Supreme-Variable",
      cssVariable: "--font-supreme",
      options: {
      variants: [{
          src: ['./src/fonts/Supreme-Variable.ttf'],
          weight: "100 900",
          style: 'normal'
      }]
      }
  },
  {
      provider: fontProviders.local(),
      name: "Supreme-VariableItalic",
      cssVariable: "--font-supreme-Italic",
      options: {
      variants: [{
          src: ['./src/fonts/Supreme-VariableItalic.ttf'],
          weight: "100 900",
          style: 'italic'
      }]
      }
  }],

  vite: {
      plugins: [tailwind()],
  },

  integrations: [react()]
});