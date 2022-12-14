module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': "off",
    'react/prop-types': "off",
    'react/jsx-no-constructed-context-values': "off",
    'react/function-component-definition': "off",
     'arrow-body-style': "off",
     "treatUndefinedAsUnspecified": "off",
     "consistent-return": "off",
    "import/no-extraneous-dependencies": "off",
    'react/jsx-props-no-spreading': "off",
    'import/prefer-default-export': "off",
    'react/destructuring-assignment': "off",
    'jsx-a11y/anchor-is-valid': "off",
    'jsx-a11y/alt-text': "off",
    'jsx-a11y/no-static-element-interactions': "off",
    'jsx-a11y/click-events-have-key-events': "off",
    'react/button-has-type': "off",
    'react/no-array-index-key': "off",

    },
};
