import { defineConfig } from 'tsup';

// Single ESM build. Browsers load it as an ES module straight from a CDN
// (esm.sh / jsDelivr), so no separate IIFE/UMD bundle. Type declarations come
// from `tsc -p tsconfig.build.json`: tsup's dts build needs the TypeScript JS
// API, which TypeScript 7 does not ship.
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  target: 'es2020',
});
