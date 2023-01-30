module.exports = {
  extends: ['@transferwise'],
  parser: '@typescript-eslint/parser',
  plugins: ['unused-imports'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
    /**
     * TESTS
     */
    {
      files: ['**/*.test.{js,jsx,ts,tsx}'],
      extends: [],
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'fp/no-mutation': 'off',
        '@typescript-eslint/no-shadow': 'off', // Story decorators, Jest mocks
      },
    },
  ],
};
