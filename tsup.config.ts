import { defineConfig } from 'tsup';

// Single ESM build (+ type declarations). Browsers load it as an ES module
// straight from a CDN (esm.sh / jsDelivr), so no separate IIFE/UMD bundle.
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2020',
});
