module.exports = {
  root: true,
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'object-curly-newline': 'off',
    'arrow-body-style': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'global-require': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
