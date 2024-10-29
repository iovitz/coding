module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-undef': 'off',
    'require-jsdoc': 'off',
    'no-unused-vars': 'off',
    'no-dupe-class-members': 'off'
  }
}
