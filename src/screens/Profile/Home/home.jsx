import React, {useCallback, useContext, useEffect} from 'react';
import {styles} from './styles';
import {AuthContext} from '../../../contexts';
import {FormField, Text} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
import {useFormik} from 'formik';
import {formInit} from './utils';
import {ROUTES} from '../../../navigator';
import {firebase} from '../../../firebase';

export const Home = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  const form = useFormik(formInit(user?.userData || {}));
  const {values, errors, handleChange} = form;

  useEffect(() => {
    return () => {};
  }, []);

  const confirmPressed = useCallback(() => {
    firebase.setUser(user?.uid, values, {
      successCB: () => {
        const _user = JSON.stringify(user);
        setUser({...JSON.parse(_user), userData: values});
        navigation.navigate(ROUTES.BottomTabNavigator);
      },
    });
  }, [values, user]);
  return (
    <SafeAreaView style={styles.container}>
      <FormField value={user?.email} disable style={styles.formField} />
      <FormField
        title={'Name'}
        handleOnChangeText={handleChange('name')}
        style={styles.formField}
        value={values?.name}
        isValidate={errors?.name}
      />
      <FormField
        title={'Age'}
        handleOnChangeText={handleChange('age')}
        style={styles.formField}
        value={values?.age}
        isValidate={errors?.age}
      />
      <FormField
        title={'Phone'}
        handleOnChangeText={handleChange('phone')}
        style={styles.formField}
        value={values?.phone}
        isValidate={errors?.phone}
      />
      <FormField
        title={'Experience'}
        handleOnChangeText={handleChange('experience')}
        style={styles.formField}
        value={values?.experience}
        isValidate={errors?.experience}
      />

      <TouchableOpacity
        onPress={confirmPressed}
        style={styles.buttonContainer}
        disabled={
          errors?.age || errors?.name || errors?.experience || errors?.phone
        }>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
