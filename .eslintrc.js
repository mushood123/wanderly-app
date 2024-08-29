module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~src',
        rootPathSuffix: 'src/',
      },
    },
  },
};
