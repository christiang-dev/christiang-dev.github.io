import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/christiang-dev.github.io/",
  // base: "/",
  plugins: [svelte()],
})
