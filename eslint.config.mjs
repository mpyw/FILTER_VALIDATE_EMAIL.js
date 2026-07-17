import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/', 'coverage/', 'node_modules/'],
  },
  {
    files: ['**/*.{js,mjs,ts}'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    rules: {
      'no-control-regex': 'off',
    },
  },
  eslintConfigPrettier
);
