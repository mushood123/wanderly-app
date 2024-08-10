import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {AuthContext} from '../../../contexts';
import {Text} from '../../../components';

export const Home = ({navigation}) => {
  const {user} = useContext(AuthContext);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Text>{`Profile Home ${user.email} ${user.uid}`}</Text>
    </View>
  );
};
