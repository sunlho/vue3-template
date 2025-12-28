import pluginVue from "eslint-plugin-vue"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import vueParser from "vue-eslint-parser"
import prettierRecommended from "eslint-plugin-prettier/recommended"

export default tseslint.config({
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...pluginVue.configs["flat/essential"], prettierRecommended],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tseslint.parser,
      sourceType: "module",
    },
  },
  settings: {
    "import/resolver": [".ts", ".tsx", ".vue"],
  },
  rules: {
    "no-undef": "off",
    "prettier/prettier": ["warn"],
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/no-empty-object-type": "with-single-extends",
  },
  ignores: ["node_modules", "dist"],
})
