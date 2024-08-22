import React from 'react';
import {PackagesHome, OffersByMe, AcceptedByMe} from '../../screens';
import {ROUTES} from '../routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {font} from '../../theme/fonts';
import {TouchableOpacity} from 'react-native';
import {EditModal} from '../../components';
import {styles} from './styles';
import {IconCreatePackage} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {setModalVisibility} from '../../redux/Packages';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {modalVisibility} = useSelector(state => state.package);
  const dispatch = useDispatch();
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
      <TouchableOpacity
        onPress={() => {
          dispatch(setModalVisibility(true));
        }}
        style={styles.createPackageContainer}>
        <IconCreatePackage height={40} width={40} />
      </TouchableOpacity>
      {modalVisibility && <EditModal isCreateOffer={true} />}
    </>
  );
};
