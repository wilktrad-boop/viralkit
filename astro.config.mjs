// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://www.viralkit.fr',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    sitemap(),
  ],
});
