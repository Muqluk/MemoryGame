const path = require('path');
require('@babel/register');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Components', './src/App/Components'],
          ['css', './src/App/Static'],
          ['Pages', './src/App/Pages'],
          ['Store', './src/App/Store'],
        ],
      },
      webpack: {
        config: path.resolve('./conf/webpack.common.js'),
      },
    }
  },
  globals: {
    React: true,
    ReactDOM: true,
    PropTypes: true,
    Webpack: true
  },
  extends: [
    'airbnb',
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    'react',
    'jsx-a11y',
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'no-unused-expressions': [2, { allowTernary: true }],
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'comma-dangle': ['warn', 'only-multiline'],
    'linebreak-style': ['warn', 'unix'],
    'no-unused-vars': 'warn',
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    radix: 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': [2, { caseSensitive: true }],
    'no-use-before-define': 1,
    'arrow-parens': ["error", "always"],
    /*
    *  react specific
    */
    'react/destructuring-assignment': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/jsx-closing-bracket-location': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/prop-types': 0,
  }
};
