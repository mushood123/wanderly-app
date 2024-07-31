import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {FormField} from '../../../components/FormField/formField';

const guide_explain_tourist = require('../../../assets/images/guide_explain_tourist.jpg');

export const SignIn = ({navigation}) => {
  const [form, setForm] = useState({
    email: ' ',
    password: '',
  });

  const handleSignIn = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={guide_explain_tourist} style={styles.image} />
      </View>
      <Text style={styles.welcomeText}>Welcome to Wanderly</Text>
      <Text style={styles.loginText}>Login to your account</Text>

      <FormField fieldType="username" />
      <FormField />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={{marginBottom: '1%'}}>Do not have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
