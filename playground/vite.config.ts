import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Plugin from '../src'

export default defineConfig({
  plugins: [
    Inspect(),
    Plugin(),
  ],
})
