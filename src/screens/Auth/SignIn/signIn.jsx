import {TouchableOpacity, View, Image} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {styles} from './styles';
import {FormField, Text} from '../../../components';
import {useFocusEffect} from '@react-navigation/native';

const guide_explain_tourist = require('../../../assets/images/guide_explain_tourist.jpg');

export const SignIn = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    loaded: false,
  });
  console.log('sign-in useeffect ' + form.email, form.password, form.loaded);

  const [emptyForm, setEmptyForm] = useState({
    email: false,
    password: false,
  });

  const checkEmptyField = () => {
    setEmptyForm({
      email: !form.email.trim(),
      password: !form.password.trim(),
    });
  };

  useEffect(() => {
    if (form.loaded) {
      checkEmptyField();
    } else {
      setForm(prevForm => ({...prevForm, loaded: true}));
    }
  }, [form.email, form.password]);

  const handleSignIn = () => {
    checkEmptyField();
    // Handle sign-in logic here
  };

  useFocusEffect(
    useCallback(() => {
      setEmptyForm(prevForm => ({
        ...prevForm,
        email: false,
        password: false,
      }));
      setForm(prevForm => ({...prevForm, loaded: false}));
    }, []),
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.3,
          alignItems: 'center',
        }}>
        <View style={styles.shadowContainer}>
          <View style={styles.imageContainer}>
            <Image source={guide_explain_tourist} style={styles.image} />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.7,
          marginHorizontal: 20,
        }}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.loginText}>Login to your account</Text>
        <FormField
          title="Email"
          style={styles.test}
          isEmpty={emptyForm.email}
          handleOnChangeText={text => setForm({...form, email: text})}
        />
        <FormField
          style={styles.test}
          isEmpty={emptyForm.password}
          title="Password"
          secureTextEntry={true}
          handleOnChangeText={text => setForm({...form, password: text})}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={{marginBottom: '1%'}}>Do not have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.footerText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
