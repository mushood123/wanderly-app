jest.mock('react-native-gesture-handler', () => { });
jest.mock('react-native', () => {
    const RN = jest.requireActual('react-native');
    RN.NativeModules.StatusBarManager = {
        getHeight: jest.fn(),
    };
    return RN;
});
