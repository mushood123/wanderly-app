import Geolocation from '@react-native-community/geolocation';

const config = {
    skipPermissionRequests: false,
    authorizationLevel: 'always',
    enableBackgroundLocationUpdates: true,
    locationProvider: 'auto',
};

export const geolocationInit = () => {
    Geolocation.setRNConfiguration(config);
};

export const requestGeolocationRequestAuthorization = () => {
    Geolocation.requestAuthorization();
};

export const getGeolocationCurrentPosition = (
    success = r => console.log(r),
    error = e => console.log(e),
    options = {
        maximumAge: 0,
        enableHighAccuracy: true,
    },
) => {
    Geolocation.getCurrentPosition(success, error, options);
};

export const getGeolocationWatchPosition = (
    success = r => console.log(r),
    error = e => console.log(e),
    options = {
        maximumAge: 0,
        enableHighAccuracy: true,
        distanceFilter: 0,
        useSignificantChanges: false,
    },
) => Geolocation.watchPosition(success, error, options);

export const clearGeolocationWatchPosition = watchID => {
    Geolocation.clearWatch(watchID);
};
