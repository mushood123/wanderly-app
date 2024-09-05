/* eslint-disable max-len */
module.exports = {
    rootDir: '.',
    preset: 'react-native',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    coverageDirectory: '<rootDir>/__tests__/coverage',
    testRegex: '(/__tests__/components/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$',
    moduleFileExtensions: ['ts', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['<rootDir>/__tests__/environment.js'],
    verbose: true,
    moduleDirectories: ['node_modules', 'src'],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|react-redux|@react-navigation/(.*)|@react-native-firebase/(.*))',
    ],
    transform: {
        '^.+\\.[t|j]s?$': 'babel-jest',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    }, /*
 * Automatically reset mock state before every test.
 * Equivalent to calling `jest.resetAllMocks()` before
 * each test. This will lead to any mocks having their
 * fake implementations removed but does not restore their
 * initial implementation.
 *
 * Refrence: https://jestjs.io/docs/en/configuration#resetmocks-boolean
 */
    resetMocks: true,
};
