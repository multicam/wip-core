// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
    server: {
      fs: {
        allow: [ '.yarn', 'node_modules' ]
      }
    },
  kit: {
    adapter: adapter(),

  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

};

export default config;
