module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/no-var-requires': [
      'off'
    ],
    '@typescript-eslint/no-explicit-any': [
      'off'
    ],
    'comma-dangle': [
      'error'
    ],
    '@typescript-eslint/ban-ts-comment': [
      'off'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-infix-ops': [
      'error'
    ],
    'key-spacing': [
      'error'
    ],
    'func-call-spacing': [
      'error'
    ],
    'no-prototype-builtins': [
      'off'
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ]
  }
};
