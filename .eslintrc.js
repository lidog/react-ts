module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser", // 解析器
    sourceType: "module",
    ecmaVersion: 12,
  },
  extends: [
    require.resolve("@umijs/fabric/dist/eslint"),
    "eslint:recommended", // eslint
    "plugin:prettier/recommended", // plugin-prettier
  ],
  ignorePatterns: [".eslintrc.js"],
  plugins: ["react-hooks"],
  rules: {
    "no-restricted-syntax": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "prettier/prettier": "error",
    "no-console": 0,
    "no-unused-vars": 0,
    "no-return-assign": 0,
    "max-classes-per-file": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-unused-expressions": ["off"],
    "@typescript-eslint/no-use-before-define": ["off"],
  },
};
