import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';

import {LanguageContext} from '../../../contexts';
import {firebase} from '../../../firebase';

export const AcceptedByMe = () => {
  const {locale} = useContext(LanguageContext);
  const {user} = useContext(AuthContext);
  const {} = useContext(PackagesContext);
  useEffect(() => {
    firebase.getCurrentUserAcceptedOffers(user.uid, {
      successCB: data => {
        console.log('THERE', data);
      },
    });
    return () => {};
  }, []);

  return <ScrollView contentContainerStyle={styles.container} />;
};
