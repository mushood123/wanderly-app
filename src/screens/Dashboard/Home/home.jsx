import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {firebase} from '../../../firebase';
import {Text} from '../../../components';

export const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={() => firebase.signOut()}>
        <Text style={styles.footerText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
