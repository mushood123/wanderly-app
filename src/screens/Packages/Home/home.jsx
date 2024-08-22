import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';
import {Card} from '../../../components';
import {firebase} from '../../../firebase';

export const Home = () => {
  const {allOffers, setAllOffers} = useContext(PackagesContext);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const onValueChange = firebase.getOffers({
      successCB: data => {
        setAllOffers(data);
      },
    });
    return () => {
      firebase.getOffersCloseConnection(onValueChange);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {allOffers &&
        Object.keys(allOffers).map(packageId => {
          const {packageDetails, uid} = allOffers[packageId];
          return (
            <Card
              showButton
              uid={uid}
              currentUserId={user.uid}
              {...packageDetails}
            />
          );
        })}
    </ScrollView>
  );
};
