module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'babel-plugin-root-import',
            {
                rootPathPrefix: '~src',
                rootPathSuffix: 'src',
            },
        ],
        ['react-native-reanimated/plugin'],
    ],
};
