import {TouchableOpacity, View, Image, ScrollView} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {styles} from './styles';
import {FormField, Text} from '../../../components';
import {useFocusEffect} from '@react-navigation/native';

const guide_explain_tourist = require('../../../assets/images/guide_explain_tourist.jpg');

export const SignUp = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    mobile: '',
    newPassword: '',
    againPassword: '',
    loaded: false,
  });
  console.log(
    'sign-up useeffect vhoot' +
      form.email +
      form.mobile +
      form.newPassword +
      form.againPassword,
  );

  const [emptyForm, setEmptyForm] = useState({
    email: false,
    mobile: false,
    newPassword: false,
    againPassword: false,
  });

  const checkEmptyField = () => {
    setEmptyForm({
      email: !form.email.trim(),
      mobile: !form.mobile.trim(),
      newPassword: !form.newPassword.trim(),
      againPassword: !form.againPassword.trim(),
    });
  };

  useEffect(() => {
    if (form.loaded) {
      checkEmptyField();
    } else {
      setForm(prevForm => ({...prevForm, loaded: true}));
    }
  }, [
    form.email,
    form.mobile,
    form.newPassword,
    form.againPassword,
    form.loaded,
  ]);

  useFocusEffect(
    useCallback(() => {
      console.log('Welcome Back to sign up');
      // Reset emptyForm and form.loaded when the screen gains focus
      setEmptyForm(prevForm => ({
        ...prevForm,
        email: false,
        mobile: false,
        newPassword: false,
        againPassword: false,
      })); // Corrected this part to avoid unnecessary usage of prevForm
      console.log(
        'sign-up useFocusEffect ' + form.email,
        form.mobile,
        form.newPassword,
        form.againPassword,
      );
      setForm(prevForm => ({...prevForm, loaded: false}));
    }, []),
  );

  const handleSignUp = () => {
    checkEmptyField();
    // Handle sign-up logic here
    console.log('Sign Up:', form);
  };
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
        <Text style={styles.welcomeText}>Welcome to Wanderly</Text>
        <Text style={styles.signInText}>Create your account</Text>
        <FormField
          title="Email"
          style={styles.test}
          isEmpty={emptyForm.email}
          handleOnChangeText={text => setForm({...form, email: text})}
        />
        <FormField
          title="Mobile Number"
          style={styles.test}
          keyboardType="numeric"
          isEmpty={emptyForm.mobile}
          handleOnChangeText={text => setForm({...form, mobile: text})}
        />
        <FormField
          title="New Password"
          style={styles.test}
          secureTextEntry={true}
          isEmpty={emptyForm.newPassword}
          handleOnChangeText={text => setForm({...form, newPassword: text})}
        />
        <FormField
          title="Again Password"
          style={styles.test}
          secureTextEntry={true}
          isEmpty={emptyForm.againPassword}
          handleOnChangeText={text => setForm({...form, againPassword: text})}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
          <Text style={styles.signUpButton}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={{marginBottom: '1%'}}>Already have a account.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.footerText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
