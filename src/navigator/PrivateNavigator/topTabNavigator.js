import React, {useState} from 'react';
import {PackagesHome, OffersByMe, AcceptedByMe} from '../../screens';
import {ROUTES} from '../routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {font} from '../../theme/fonts';
import {TouchableOpacity} from 'react-native';
import {EditModal} from '../../components';
import {styles} from './styles';
import {IconCreatePackage} from '../../assets';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [createOffer, setCreateOffer] = useState();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12, fontFamily: font.primary},
          tabBarItemStyle: {paddingTop: 60},
          tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name={ROUTES.AllOffers} component={PackagesHome} />
        <Tab.Screen name={ROUTES.AcceptedOffers} component={AcceptedByMe} />
        <Tab.Screen name={ROUTES.CreatedOffers} component={OffersByMe} />
      </Tab.Navigator>
      <EditModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        isCreateOffer={true}
        setCreateOffer={setCreateOffer}
      />
      <TouchableOpacity
        onPress={() => {
          console.log(createOffer);
          setModalVisibility(!modalVisibility);
        }}
        style={styles.createPackageContainer}>
        <IconCreatePackage height={40} width={40} />
      </TouchableOpacity>
    </>
  );
};
