export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-standard-vue',
    'stylelint-config-tailwindcss',
  ],
  rules: {
    'import-notation': 'string',
    'no-empty-source': null,
    'selector-class-pattern': null,
  },
}
