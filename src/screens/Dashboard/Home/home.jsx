import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';
import {firebase} from '~src/firebase';
import {Text} from '~src/components';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '~src/redux/Auth';
import {
  clearGeolocationWatchPosition,
  getGeolocationWatchPosition,
} from '~src/utils/locations';
import {requestLocationPermissions} from '~src/utils/permissions';

export const Home = ({navigation, route}) => {
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {locale} = useSelector(state => state.language);
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  useEffect(() => {
    firebase.setCurrentUserRole(user?.uid);
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
        region={location}
      />

      <TouchableOpacity
        onPress={() => {
          firebase.signOut(() => {
            dispatch(setUser(null));
          });
        }}
        style={styles.logout}>
        <Text>{locale.LABEL.LOGOUT}</Text>
      </TouchableOpacity>
    </View>
  );
};
