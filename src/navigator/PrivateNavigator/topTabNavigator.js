import React, {useContext} from 'react';
import {PackagesHome, OffersByMe, AcceptedByMe} from '../../screens';
import {ROUTES} from '../routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {font} from '../../theme/fonts';
import {TouchableOpacity, Modal, View} from 'react-native';
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
  const {user} = useContext(AuthContext);
  const {locale} = useContext(LanguageContext);
  const {modalVisibility, setModalVisibility} = useContext(PackagesContext);
  const form = useFormik(formInit);
  const {values, errors, handleChange} = form;
  const packageDetails = {
    hourlyRate: values?.hourlyRate,
    places: values?.places
      .replace('[', '')
      .replace(']', '')
      .split(',')
      .map(String),
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
        <Tab.Screen name={ROUTES.acceptedOffers} component={AcceptedByMe} />
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
            title={locale.CLAUSE.SET_HOURLY_RATE}
            style={{marginBottom: 10}}
            value={values.hourlyRate}
            handleOnChangeText={handleChange('hourlyRate')}
            isValidate={errors?.hourlyRate}
          />
          <FormField
            title={locale.CLAUSE.ENTER_PLACE_TO_VIST}
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
            disabled={errors?.hourlyRate || errors?.places}
            onPress={() => {
              firebase.createOffer(
                user.uid,
                packageDetails,
                JSON.parse(JSON.stringify(user)),
              );
              setModalVisibility(!modalVisibility);
            }}
            style={styles.addCreatePackage}>
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
