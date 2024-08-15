import React, {useContext, useEffect, useCallback} from 'react';
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
  const onBuyPressed = useCallback((pid, uid) => {
    firebase.setCurrentUserAcceptedOffers(pid, uid);
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
                offer={allOffers[packageId]}
                packageId={packageId}
                name={userData?.name}
                showButton={true}
                uid={uid}
                onBuyPressed={onBuyPressed}
                currentUserId={user.uid}
                {...packageDetails}
              />
            )
          );
        })}
    </ScrollView>
  );
};
