module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'off',
    'import/no-unresolved': 'off',
    eqeqeq: ['error', 'smart'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
  },
};
