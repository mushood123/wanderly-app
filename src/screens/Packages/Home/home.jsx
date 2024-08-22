import React, {useContext, useEffect} from 'react';
import {Modal, ScrollView} from 'react-native';
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
          const {packageDetails, uid, profile} = allOffers[packageId];
          const {userData} = profile;

          return (
            user.uid !== uid && (
              <Card
                key={packageId}
                name={userData?.name}
                showButton={true}
                uid={uid}
                currentUserId={user.uid}
                {...packageDetails}
              />
            )
          );
        })}
    </ScrollView>
  );
};
