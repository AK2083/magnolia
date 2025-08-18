import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    extends: ["js/recommended", prettierConfig],
    languageOptions: { globals: globals.browser },
    rules: {
      "prettier/prettier": "warn",
    },
  },

  tseslint.configs.recommended as ReturnType<typeof defineConfig>,
  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },

  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
