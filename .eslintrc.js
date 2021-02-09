module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  rules: {
    'prettier/prettier': 2,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'sort-imports': 0,
    'import/order': 0,
    'import/no-anonymous-default-export': [2, { allowArray: true }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
  },
  overrides: [
    {
      files: 'server/**/*.js',
      env: { node: true },
      rules: {
        'simple-import-sort/imports': 0,
        'import/order': ['error', { 'newlines-between': 'always' }],
      },
    },
  ],
}
