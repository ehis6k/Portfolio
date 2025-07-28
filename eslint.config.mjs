import nextPlugin from 'eslint-config-next'
import prettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['.next/**', '.taskmaster/**'],
  },
  ...nextPlugin.configs.recommended,
  prettierConfig,
]
