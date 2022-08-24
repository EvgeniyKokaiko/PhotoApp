module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks', 'react'],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-void': 'off',
    'no-unused-vars': 'off',
    'max-len': ['error', { code: 8000 }],
  },
};
