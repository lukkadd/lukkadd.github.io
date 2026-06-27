// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Quicksand",
    cssVariable: "--font-quicksand",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Quicksand.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});