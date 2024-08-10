import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';

import {LanguageContext} from '../../../contexts';

export const AcceptedByMe = () => {
  const {locale} = useContext(LanguageContext);
  const {} = useContext(AuthContext);
  const {} = useContext(PackagesContext);
  useEffect(() => {
    return () => {};
  }, []);

  return <ScrollView contentContainerStyle={styles.container} />;
};
