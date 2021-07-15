module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react-hooks'],
  rules: {
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
  }
}