import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';
import {Card} from '../../../components';
import {firebase} from '../../../firebase';

export const OffersByMe = () => {
  const {user} = useContext(AuthContext);
  const {userData} = user;

  const {createdOffer, setCreatedOffers} = useContext(PackagesContext);
  useEffect(() => {
    const onValueChange = firebase.getCurrentUserCreatedOffers(user.uid, {
      successCB: data => {
        setCreatedOffers(data);
      },
    });
    return () => firebase.getOffersCloseConnection(onValueChange);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {createdOffer &&
        Object.keys(createdOffer).map(packageId => {
          const {packageDetails} = createdOffer[packageId];
          return (
            <Card
              name={userData?.name}
              showButton
              uid={user.uid}
              currentUserId={user.uid}
              {...packageDetails}
            />
          );
        })}
    </ScrollView>
  );
};
