import React, {useContext, useEffect, useState, useCallback} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';
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
        Object.keys(acceptedPackage).map((packageId, index) => {
          const {packageDetails, uid, profile} = acceptedPackage[packageId];
          const {userData} = profile;
          return (
            <Card
              key={`${packageId}_${index}_accepted`}
              name={userData?.name}
              showButton={false}
              uid={uid}
              currentUserId={user.uid}
              {...packageDetails}
            />
          );
        })}
    </ScrollView>
  );
};
