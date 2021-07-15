module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',  // 解析器
    sourceType: 'module',
    ecmaVersion: 12
  },
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'plugin:react/react-recommended',  // plugin-vue
    'eslint:recommended',  // eslint
    'plugin:prettier/recommended',  // plugin-prettier
  ],
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react-hooks'],
  rules: {
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'prettier/prettier': 'error',
  }
}