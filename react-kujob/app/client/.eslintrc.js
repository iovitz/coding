module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    'import/extensions': 'off',
    semi: 0,
    'semi-spacing': [0, { before: false, after: true }],
    'import/no-unresolved': 0,
  },
};
