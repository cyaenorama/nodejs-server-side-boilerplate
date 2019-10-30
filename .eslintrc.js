module.exports = {
  root: true,

  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
  ],

  env: {
    node: true,
    commonjs: true,
    es2020: true,
    jest: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
  },

  plugins: [],

  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },

  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },

  overrides: [
    {
      files: ['**/*.ts'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          impliedStrict: true,
          globalReturn: false,
        },
        project: './tsconfig.json',
      },

      plugins: ['@typescript-eslint'],

      rules: {
        /* @typescript-eslint recommended rules */
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-ignore': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/camelcase': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': 'error',
        /* eslint rules for @typescript-eslint */
        camelcase: 'off',
        'getter-return': 'off',
        'no-array-constructor': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-empty-function': 'off',
        'no-new-symbol': 'off',
        'no-redeclare': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'require-await': 'off',
        'valid-typeof': 'off',
        /* prettier rules for @typescript-eslint */
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
      },

      settings: {
        'import/extensions': ['.ts', '.d.ts', '.js'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.d.ts'],
        },
        'import/resolver': {
          node: {
            extensions: ['.ts', '.d.ts', '.js'],
          },
        },
      },
    },
  ],
};
