import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';
import {firebase} from '../../../firebase';
import {
  clearGeolocationWatchPosition,
  getGeolocationWatchPosition,
  requestLocationPermissions,
} from '../../../utils';

export const Home = ({navigation, route}) => {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {user} = route?.params || {};
  useEffect(() => {
    requestLocationPermissions();
    const watchID = getGeolocationWatchPosition(r => {
      const {latitude, longitude} = r?.coords || {};
      setLocation({...location, latitude, longitude});
      firebase.setCurrentUserLocation(user?.uid || '', r);
    });
    return () => {
      clearGeolocationWatchPosition(watchID);
    };
  }, []);

  // useEffect(() => {
  //   console.log('location', JSON.stringify(location));
  //   return () => {};
  // }, [location]);

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation
        showsScale
        scrollEnabled
        showsBuildings
        scrollDuringRotateOrZoomEnabled
        shouldRasterizeIOS
        showsCompass
        showsIndoorLevelPicker
        showsIndoors
        showsMyLocationButton
        showsPointsOfInterest
        showsTraffic
        renderToHardwareTextureAndroid
        rotateEnabled
        userLocationAnnotationTitle="My Location"
        focusable
        followsUserLocation
        zoomControlEnabled
        zoomEnabled
        zoomTapEnabled
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={location}></MapView>
    </View>
  );
};
