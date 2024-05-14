import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  vue: true,
  rules: {
    "semi": ["error", "always"],
    "no-console": "warn",
    "quotes": ["error", "double"],
  },
  stylistic: {
    quotes: "double",
    semi: true,
  },
});
