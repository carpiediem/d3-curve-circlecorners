const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2017,
      sourceType: "module",
      globals: {
        ...globals.es2017,
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-cond-assign": 0,
      "no-fallthrough": 0,
    },
  },
];
