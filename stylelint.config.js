export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": null,
    "color-hex-length": "long",
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"],
      },
    ],
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "coverage/**/*"],
}; 