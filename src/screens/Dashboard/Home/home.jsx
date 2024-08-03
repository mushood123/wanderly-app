import React, {useEffect} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {firebase} from '../../../firebase';
import {Text} from '../../../components';
import {
  clearGeolocationWatchPosition,
  getGeolocationWatchPosition,
  requestLocationPermissions,
} from '../../../utils';

export const Home = ({navigation, route}) => {
  const {user} = route?.params || {};
  useEffect(() => {
    requestLocationPermissions();
    const watchID = getGeolocationWatchPosition(r => {
      firebase.setCurrentUserLocation(user?.uid || '', r);
    });
    return () => {
      clearGeolocationWatchPosition(watchID);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <TouchableOpacity onPress={() => firebase.signOut()}>
        <Text style={styles.footerText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
