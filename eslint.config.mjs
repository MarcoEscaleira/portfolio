import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";

const importOrder = {
  groups: ["builtin", "external", "internal"],
  pathGroups: [
    {
      pattern: "react",
      group: "external",
      position: "before",
    },
  ],
  pathGroupsExcludedImportTypes: ["react"],
  "newlines-between": "never",
  alphabetize: {
    order: "asc",
    caseInsensitive: true,
  },
};

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": ["warn", importOrder],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
