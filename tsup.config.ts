import { defineConfig } from 'tsup';

// `dist` is wiped by the `prebuild` script, not by tsup's own `clean`, because
// these two builds run concurrently and a per-config `clean` could race with
// and delete the other build's freshly written output.
export default defineConfig([
  // ESM build (+ type declarations) for npm consumers / bundlers
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: false,
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
