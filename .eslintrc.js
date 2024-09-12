module.exports = {
  root: true,
  ignorePatterns: [
    'documentation/**/*',
    'coverage/**/*',
    '.eslintrc.js',
    'zone-flags.ts',
    'karma.conf.js',
    'cache/*',
    'node_modules/*',
    'proxy.conf.js',
    'server.ts',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es6: true,

    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['html', '@angular-eslint', '@typescript-eslint'],

  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'return',
      },
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },

  rules: {
    'id-length': [
      'error',
      {
        min: 2,
        max: 40,
        exceptions: ['i', 'j', 'x', 'y', 'z', '_', '__', 'r', 'g', 'b', 'a', 'h', 's', 'v'],
      },
    ],

    'max-params': 'off', // для конструктора,
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: {
          memberTypes: ['decorated-set'],
        },
      },
    ],
    //
    // Possible errors
    //
    'no-await-in-loop': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-extra-parens': 0,
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'warn',

    //
    // Best Practices
    //

    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 0,
    complexity: ['error', 9],
    curly: 'error',
    'default-case': 1,
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 0,
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 0,
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'warn',
    radix: 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: 'error',

    //
    // Variables
    //

    'init-declarations': 0,
    'no-label-var': 'error',
    'no-shadow': 'off',
    'no-undefined': 0,
    'no-use-before-define': 'off',

    //
    // Stylistic Issues
    //

    'array-bracket-newline': 0,
    camelcase: 'warn',
    'capitalized-comments': 0,
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'consistent-this': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'id-length': [
      'error',
      {
        min: 2,
        max: 40,
        exceptions: ['i', 'j', '_', '__'],
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      {
        ignoreRegExpLiterals: false,
        ignoreStrings: false,
        ignorePattern: '^import',
        code: 120,
      },
    ],
    'max-lines': ['warn', 400],
    'max-lines-per-function': ['warn', 120],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 10],
    'max-statements-per-line': 'error',
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-tabs': 'error',
    'no-unneeded-ternary': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 0,
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'prefer-object-spread': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'space-before-function-paren': 0,

    //
    // ECMAScript 6
    //

    'no-useless-constructor': 0,
    'no-var': 'error',
    'no-array-constructor': 'error',
    'prefer-spread': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'symbol-description': 'error',

    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/no-conflicting-lifecycle': 'error',
  },
  overrides: [
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@typescript-eslint/recommended',
        'plugin:rxjs/recommended',
        'plugin:jsdoc/recommended-typescript-error',
        'plugin:import/recommended',
      ],
      plugins: ['deprecation', 'jsdoc', 'unused-imports'],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/no-empty-lifecycle-method': 'off',
        'no-implicit-globals': 'error',
        'spaced-comment': 'error',
        //
        // Eslint Plugin Import
        //
        'import/first': 'error',
        'import/no-absolute-path': 'error',
        'import/no-anonymous-default-export': [
          'warn',
          {
            allowObject: true,
            allowArray: true,
          },
        ],
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'warn',
        'import/no-named-default': 'warn',
        'import/no-self-import': 'error',
        'import/no-cycle': [
          'error',
          {
            maxDepth: 4,
          },
        ],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/no-default-export': 'error',
        //
        // Eslint Plugin Unused Import
        //
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        //
        // JsDoc
        //
        'jsdoc/require-returns': 'off',
        'jsdoc/newline-after-description': 'off',
        //
        // RxJS
        //
        'rxjs/no-implicit-any-catch': 'off',
        'rxjs/no-finnish': ['error'],
        //
        // Does Not Work Well With Eslint
        //
        'valid-jsdoc': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        //
        // General rules
        //
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array',
            readonly: 'array',
          },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
        '@typescript-eslint/generic-type-naming': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/member-ordering': ['error'],
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-extra-parens': 0,
        '@typescript-eslint/no-extraneous-class': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-for-in-array': 0,
        '@typescript-eslint/no-magic-numbers': 0,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/no-require-imports': 1,
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true,
          },
        ],
        '@typescript-eslint/no-type-alias': 0,
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-untyped-public-signature': 0,
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-for-of': 0,
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 0,
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/space-before-function-paren': 0,
        '@typescript-eslint/typedef': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        //
        // Eslint Plugin unused Imports
        //
        '@typescript-eslint/no-unused-vars': 'off',
        // deprecation
        'deprecation/deprecation': 'warn',
      },
    },
    {
      files: ['src/**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'max-lines-per-function': ['off'],
      },
    },
  ],
};
