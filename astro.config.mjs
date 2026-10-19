
// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,
    allowedHosts:["https://satisfactory-concern-listprice-arena.trycloudflare.com",
        "nested-louisville-wanna-bone.trycloudflare.com"
    ]
  }
});