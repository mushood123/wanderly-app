import React, {useContext, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {PackagesContext} from '../../../contexts';
import {Card} from '../../../components';
import {firebase} from '../../../firebase';

export const Home = () => {
  const {allOffers, setAllOffers} = useContext(PackagesContext);
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
          const {packageDetails} = allOffers[packageId];
          return <Card {...packageDetails} />;
        })}
    </ScrollView>
  );
};
