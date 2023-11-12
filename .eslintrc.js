module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '18',
    },
  },
  rules: {
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: true,
        // Allow '_' and 'e' in function args.
        argsIgnorePattern: '^(_|e)$',
      },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/prefer-interface': 0,
    eqeqeq: ['error', 'always'],
    'no-console': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    'prettier/prettier': 1,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/display-name': 0,
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-no-bind': 0,
    'react/jsx-no-undef': 0,
    'react/no-unescaped-entities': 1,
    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
