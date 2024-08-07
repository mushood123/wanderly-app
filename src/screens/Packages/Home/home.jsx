import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {AuthContext} from '../../../contexts';
import {Text} from '../../../components';
import {firebase} from '../../../firebase';

export const Home = ({navigation}) => {
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const onValueChange = firebase.getOffers({
      successCB: data => {
        // console.log('coming from firebase', data)
      },
    });
    return () => {
      // console.log('stop listening');
      () => database().ref(`/users/${user}`).off('value', onValueChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          // firebase.createOffer(user?.uid, {
          //   hourlyRate: 40,
          //   places: ['Muree', 'Nathia', 'Naran'],
          // });
          firebase.getCurrentUserCreatedOffers(user?.uid);
        }}>
        Packages Home
      </Text>
    </View>
  );
};
