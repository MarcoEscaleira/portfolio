module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:jest/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier", "import"],
  rules: {
    "prettier/prettier": "warn",

    quotes: ["error", "double"],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    "react/prop-types": "off",
    "react/jsx-pascal-case": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["off", "element"],
    "react/sort-comp": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unused-state": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-wrap-multilines": [
      2,
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "ignore",
        condition: "ignore",
        logical: "ignore",
        prop: "ignore",
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/named": "warn",

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "warn",

    "prefer-promise-reject-errors": "off",
    "global-require": "off",
    "no-underscore-dangle": "off",
    "prefer-destructuring": "warn",
    "no-restricted-globals": "off",
    "react/button-has-type": "warn",
    "no-unused-vars": "warn",
    "no-compare-neg-zero": "warn",
    "no-unused-expressions": "warn",
    "no-return-assign": "warn",
    "object-curly-newline": "off",
  },
};
