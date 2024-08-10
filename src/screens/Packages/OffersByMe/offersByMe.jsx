import React, {useContext, useEffect, useState} from 'react';
import {Modal, ScrollView, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';
import {Card, FormField, Text} from '../../../components';
import {firebase} from '../../../firebase';

import {LanguageContext} from '../../../contexts';

export const OffersByMe = () => {
  const {locale} = useContext(LanguageContext);
  const {modalVisibility, setModalVisibility} = useContext(PackagesContext);
  const {user} = useContext(AuthContext);

  const _user = {
    name: user?.name || 'NA',
    uid: user.uid,
    email: user.email,
    experience: user?.experience || 'NA',
    phone: user?.phone || 'NA',
    photoURL: user?.photoURL || 'NA',
  };
  const {createdOffer, setCreatedOffers} = useContext(PackagesContext);
  useEffect(() => {
    const onValueChange = firebase.getCurrentUserCreatedOffers(user.uid, {
      successCB: data => {
        setCreatedOffers(data);
      },
    });
    return () => firebase.getOffersCloseConnection(onValueChange);
  }, []);

  console.log('modalVisibility', modalVisibility);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {createdOffer &&
        Object.keys(createdOffer).map(packageId => {
          // console.log(createdOffer[packageId]);
          const {packageDetails} = createdOffer[packageId];
          return <Card {...packageDetails} />;
        })}
    </ScrollView>
  );
};
