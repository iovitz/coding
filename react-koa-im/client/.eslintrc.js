module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 'esnext',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-new': 'off',
    'no-param-reassign': 'off',
    // 允许在开发环境添加debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'global-require': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'max-len': ['error', { code: 120 }],
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': 0,
    'react/self-closing-comp': ['error'],
    'arrow-parens': ['error', 'always'],
    ' @typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
