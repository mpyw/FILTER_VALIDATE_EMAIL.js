import { defineConfig } from 'tsup';

export default defineConfig([
  // ESM build (+ type declarations) for npm consumers / bundlers
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    target: 'es2020',
  },
  // Minified IIFE build exposing a browser global for `<script>` / CDN usage
  {
    entry: { 'filter-validate-email': 'src/index.ts' },
    format: ['iife'],
    globalName: 'FilterValidateEmail',
    minify: true,
    sourcemap: true,
    clean: false,
    target: 'es2020',
    outExtension: () => ({ js: '.min.js' }),
  },
]);
