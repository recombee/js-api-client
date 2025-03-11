import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config({
  ignores: ['dist/*'],
  files: ['**/*.{js,mjs,cjs,ts}'],
  languageOptions: { globals: globals.browser },
  extends: [tseslint.configs.recommended],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'no-var': 'warn',
    'prefer-const': 'warn',
  },
});
