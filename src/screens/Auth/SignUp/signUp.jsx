import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles';
import {FormField, Text} from '../../../components';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useCallback} from 'react';
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
  newPassword: Yup.string()
    .min(6, 'too short')
    .max(20, 'too large')
    .required('Required'),

  confirmPassword: Yup.string()
    .min(6, 'too short')
    .max(20, 'too large')
    .required('Required'),
});

export const SignUp = ({navigation}) => {
  const form = useFormik({
    initialValues: {
      email: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: signInSchema,
    validateOnMount: false,
  });

  const {values, errors, handleChange} = form;
  const {
    email: emailError,
    newPassword: newPasswordError,
    confirmPassword: confirmPasswordError,
  } = errors;
  const signupPressed = useCallback(() => {
    if (values.newPassword !== values.confirmPassword) {
      alert('new password does match confirm password');
    } else {
      firebase.createUserWithEmailAndPassword({
        email: values.email,
        password: values.confirmPassword,
        successCallback: r => {
          console.log(r);
        },
        errorCallback: e => {
          if (e.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (e.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
        },
      });
    }
  }, [values]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled
      keyboardVerticalOffset={30}>
      <ScrollView>
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
            handleOnChangeText={handleChange('email')}
            isValidate={emailError}
          />
          {emailError && <Text style={{color: 'red'}}>{emailError}</Text>}
          <FormField
            handleOnChangeText={handleChange('newPassword')}
            title="New Password"
            style={styles.test}
            secureTextEntry={true}
            isValidate={newPasswordError}
          />
          {newPasswordError && (
            <Text style={{color: 'red'}}>{newPasswordError}</Text>
          )}
          <FormField
            handleOnChangeText={handleChange('confirmPassword')}
            title="Confirm Password"
            style={styles.test}
            secureTextEntry={true}
            isValidate={confirmPasswordError}
          />
          {confirmPasswordError && (
            <Text style={{color: 'red'}}>{confirmPasswordError}</Text>
          )}

          <TouchableOpacity
            onPress={signupPressed}
            disabled={emailError || newPasswordError || confirmPasswordError}
            style={styles.buttonContainer}>
            <Text style={styles.signUpButton}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={{marginBottom: '1%'}}>Already have a account.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.footerText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
