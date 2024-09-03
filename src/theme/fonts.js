import { Platform } from 'react-native';

const Fonts = {
    Poppins_700: 'Poppins-Bold', // FontWeight: 700
    Poppins_300: 'Poppins-Light', // FontWeight: 300
    Poppins_500: 'Poppins-Medium', // FontWeight: 500
    Poppins_400: 'Poppins-Regular', // FontWeight: 400
    Poppins_600: 'Poppins-SemiBold', // FontWeight: 600
    Poppins_800: 'Poppins-ExtraBold', // FontWeight: 800
    Chella_500: 'Chella-Medium', // FontWeight: 600
    Chella_700: 'Chella-Bold', // FontWeight: 700
};

export const font = {
    primary: Platform.select({
        ios: Fonts.Poppins_400,
        android: Fonts.Poppins_400,
    }),
    secondary: Platform.select({
        ios: Fonts.Poppins_500,
        android: Fonts.Poppins_500,
    }),
    heading: Platform.select({
        ios: Fonts.Chella_700,
        android: Fonts.Chella_700,
    }),
};
