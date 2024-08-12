import React, {useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';

import {LanguageContext} from '../../../contexts';
import {firebase} from '../../../firebase';
import {Card} from '../../../components';

export const AcceptedByMe = () => {
  const {user} = useContext(AuthContext);
  const {acceptedPackage, setAcceptedPackage} = useContext(PackagesContext);
  useEffect(() => {
    const onValueChange = firebase.getCurrentUserAcceptedOffers(user.uid, {
      successCB: data => {
        setAcceptedPackage(data);
      },
    });
    return () => {
      firebase.getOffersCloseConnection(onValueChange);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {acceptedPackage &&
        Object.keys(acceptedPackage).map(packageId => {
          const {packageDetails, uid} = acceptedPackage[packageId];
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
