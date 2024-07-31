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
import {useCallback} from 'react';
import {formInit, signUpCallback} from './utils';
import {guide_explain_tourist} from '../../../assets';

export const SignUp = ({navigation}) => {
  const form = useFormik(formInit);

  const {values, errors, handleChange} = form;

  const {
    email: emailError,
    newPassword: newPasswordError,
    confirmPassword: confirmPasswordError,
  } = errors;

  const signupPressed = useCallback(() => {
    signUpCallback(values);
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
