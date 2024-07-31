import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {styles} from './styles';
import {FormField, Text} from '../../../components';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {firebase} from '../../../firebase';

const guide_explain_tourist = require('../../../assets/images/guide_explain_tourist.jpg');

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regex = new RegExp(emailRegex);
const isValidEmail = email => regex.test(email);

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .test(email => isValidEmail(email))
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'too short')
    .max(20, 'too large')
    .required('Required'),
});

export const SignIn = ({navigation}) => {
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    validateOnMount: false,
  });

  const {values, errors, handleChange} = form;

  const signInPressed = useCallback(() => {
    firebase.signInWithEmailAndPassword({
      email: values.email,
      password: values.password,
      successCallback: r => {
        console.log(r);
      },
      errorCallback: e => {
        console.log(e.code);
      },
    });
  }, [values]);
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={0}
      style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.shadowContainer}>
          <View style={styles.imageContainer}>
            <Image source={guide_explain_tourist} style={styles.image} />
          </View>
        </View>
        <View style={styles.formView}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.loginText}>Login to your account</Text>
          <FormField
            handleOnChangeText={handleChange('email')}
            title="Email"
            style={styles.test}
            isValidate={errors?.email}
          />
          {errors?.email && <Text style={{color: 'red'}}>{errors?.email}</Text>}
          <FormField
            style={styles.test}
            title="Password"
            secureTextEntry={true}
            handleOnChangeText={handleChange('password')}
            isValidate={errors?.password}
          />
          {errors?.password && (
            <Text style={{color: 'red'}}>{errors?.password}</Text>
          )}
          <TouchableOpacity
            onPress={signInPressed}
            disabled={errors?.email || errors?.password}
            style={styles.buttonContainer}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={{marginBottom: '1%'}}>Do not have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.footerText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
