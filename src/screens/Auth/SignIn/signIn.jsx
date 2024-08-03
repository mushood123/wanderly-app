import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {FormField, Text} from '../../../components';
import {useFormik} from 'formik';
import {guide_explain_tourist} from '../../../assets';
import {formInit, signInCallback} from './utils';

export const SignIn = ({navigation}) => {
  const form = useFormik(formInit);

  const {values, errors, handleChange} = form;

  const signInPressed = useCallback(() => signInCallback(values), [values]);

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={0}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.shadowContainer}>
          <View style={styles.imageContainer}>
            <Image source={guide_explain_tourist} style={styles.image} />
          </View>
        </View>
        <View style={styles.formView}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.loginText}>Login to your account</Text>
          <FormField
            value={values.email}
            handleOnChangeText={handleChange('email')}
            title="Email"
            style={styles.test}
            isValidate={errors?.email}
          />
          {errors?.email && <Text style={{color: 'red'}}>{errors?.email}</Text>}
          <FormField
            value={values.password}
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
            disabled={errors?.email || errors?.password ? true : false}
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
