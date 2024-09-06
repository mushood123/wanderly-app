import { NativeModules, Platform } from 'react-native';

export const getDeviceLanguage = () => {
    let language =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    if (language !== 'en_US' && language !== 'ur_US') {
        language = 'en_US';
    }
    return language;
};
