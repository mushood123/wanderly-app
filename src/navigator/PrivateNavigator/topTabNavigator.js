import React, {useContext} from 'react';
import {PackagesHome, OffersByMe} from '../../screens';
import {ROUTES} from '../routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {font} from '../../theme/fonts';
import {TouchableOpacity, Modal, View, Pressable} from 'react-native';
import {Text} from '../../components';
import {LanguageContext} from '../../contexts';
import {PackagesContext} from '../../contexts/packages';
import {firebase} from '../../firebase';
import {styles} from './styles';
import {FormField} from '../../components';
import {formInit} from './utils';
import {useFormik} from 'formik';
import {AuthContext} from '../../contexts';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {user, Setuser} = useContext(AuthContext);
  const {locale} = useContext(LanguageContext);
  const {modalVisibility, setModalVisibility} = useContext(PackagesContext);
  const form = useFormik(formInit);
  const {values, errors, handleChange} = form;
  const packageDetails = {
    hourlyRate: values?.hourlyRate,
    places: values?.places,
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12, fontFamily: font.primary},
          tabBarItemStyle: {paddingTop: 60},
          tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name={ROUTES.allOffers} component={PackagesHome} />
        <Tab.Screen name={ROUTES.acceptedOffers} component={PackagesHome} />
        <Tab.Screen name={ROUTES.createdOffers} component={OffersByMe} />
      </Tab.Navigator>
      <Modal
        transparent
        visible={modalVisibility}
        animationType="slide"
        onRequestClose={() => {
          setModalVisibility(false);
        }}>
        <View style={styles.modalContainer}>
          <FormField
            title={'Set Hourly Rate'}
            style={{marginBottom: 10}}
            value={values.hourlyRate}
            handleOnChangeText={handleChange('hourlyRate')}
            isValidate={errors?.hourlyRate}
          />
          <FormField
            title={'Enter Place to Visit'}
            value={values.places}
            handleOnChangeText={handleChange('places')}
            isValidate={errors?.places}
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisibility(false);
            }}
            style={styles.closeCreatePackage}>
            <Text style={styles.x}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              firebase.createOffer(user.uid, packageDetails);
              setModalVisibility(!modalVisibility);
            }}
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: 50,
              right: 30,
              bottom: 320,
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40, color: 'green'}}>+</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisibility(!modalVisibility);
        }}
        style={styles.createPackageContainer}>
        <Text style={{color: 'red', fontSize: 20}}>
          {locale.CLAUSE.CREATE_PACKAGE}
        </Text>
      </TouchableOpacity>
    </>
  );
};
