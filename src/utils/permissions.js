import {Platform} from 'react-native';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import {requestGeolocationRequestAuthorization} from './locations';

const permissionParam = {
  location: {
    ios: [
      PERMISSIONS.IOS.LOCATION_ALWAYS,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    ],
    android: [
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    ],
  },
};

export const requestLocationPermissions = () => {
  requestMultiple(permissionParam.location[Platform.OS])
    .then(result => {
      requestGeolocationRequestAuthorization();
    })
    .catch(error => {
      console.log('Error', error);
    });
};
