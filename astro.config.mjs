import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import Vue from '@vitejs/plugin-vue';
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), svelte(), vue(), mdx(), sitemap(), solidJs(), preact()],
  vite: {
    plugins: [Vue()]
  }
});
