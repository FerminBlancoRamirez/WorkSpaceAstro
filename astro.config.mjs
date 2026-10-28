// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      // Permite cualquier subdominio de trycloudflare.com
      ".trycloudflare.com"
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx()],
  adapter: vercel()
});