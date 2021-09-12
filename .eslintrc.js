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
    "prettier/prettier": ["warn"],

    quotes: ["error", "double"],
    "object-curly-newline": "off",

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    "react/default-props-match-prop-types": "warn",
    "react/no-unused-prop-types": "off",
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-pascal-case": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": "off",
    "react/require-default-props": "off",
    "react/static-property-placement": "off",
    "react/state-in-constructor": "warn",
    "react/sort-comp": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unused-state": "warn",
    "react/react-in-jsx-scope": "off",

    // https://github.com/gajus/eslint-plugin-flowtype
    "flowtype/no-weak-types": "off",

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/no-extraneous-dependencies": "off",
    "import/extensions": [0, "never", { ts: "never" }],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/named": "warn",

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "warn",

    // https://www.npmjs.com/package/eslint-plugin-jest
    "jest/no-done-callback": "off",
    "jest/no-mocks-import": "off",
    "jest/no-try-expect": "off",
    "jest/valid-expect-in-promise": "off",
    "jest/no-conditional-expect": "off",
    "jest/no-export": "off",
    "jest/valid-title": "off",
    "jest/valid-expect": "off",

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
  },
};
