import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';
import {firebase} from '../../../firebase';
import {
  clearGeolocationWatchPosition,
  getGeolocationWatchPosition,
  requestLocationPermissions,
} from '../../../utils';
import {AuthContext} from '../../../contexts';
import {Text} from '../../../components';
import {ROUTES} from '../../../navigator';

export const Home = ({navigation, route}) => {
  const {user, setUser} = useContext(AuthContext);
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
          navigation.navigate(ROUTES.Packages);
        }}
        style={{
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 120,
          left: 10,
          height: 60,
          width: 60,
          borderRadius: 30,
        }}>
        <Text>PACKAGES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          firebase.signOut(() => {
            setUser(null);
          });
        }}
        style={{
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 45,
          left: 10,
          height: 60,
          width: 60,
          borderRadius: 30,
        }}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};
