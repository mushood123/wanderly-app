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
import {useCallback, useContext} from 'react';
import {formInit, signUpCallback} from './utils';
import {guide_explain_tourist} from '../../../assets';
import {LanguageContext} from '../../../contexts';
import {ROUTES} from '../../../navigator';

export const SignUp = ({navigation}) => {
  const form = useFormik(formInit);
  const {locale} = useContext(LanguageContext);

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
          <Text style={styles.welcomeText}>
            {locale.CLAUSE.WELCOME_TO_WANDERLY}
          </Text>
          <Text style={styles.signInText}>
            {locale.CLAUSE.CREATE_YOUR_ACCOUNT}
          </Text>

          <FormField
            title={locale.LABEL.EMAIL}
            style={styles.test}
            handleOnChangeText={handleChange('email')}
            isValidate={emailError}
          />
          {emailError && <Text style={{color: 'red'}}>{emailError}</Text>}
          <FormField
            handleOnChangeText={handleChange('newPassword')}
            title={locale.LABEL.NEW_PASSWORD}
            style={styles.test}
            secureTextEntry={true}
            isValidate={newPasswordError}
          />
          {newPasswordError && (
            <Text style={{color: 'red'}}>{newPasswordError}</Text>
          )}
          <FormField
            handleOnChangeText={handleChange('confirmPassword')}
            title={locale.LABEL.CONFIRM_PASSWORD}
            style={styles.test}
            secureTextEntry={true}
            isValidate={confirmPasswordError}
          />
          {confirmPasswordError && (
            <Text style={{color: 'red'}}>{confirmPasswordError}</Text>
          )}

          <TouchableOpacity
            onPress={signupPressed}
            disabled={
              !!(emailError || newPasswordError || confirmPasswordError)
            }
            style={styles.buttonContainer}>
            <Text style={styles.signUpButton}>{locale.LABEL.SIGN_UP}</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={{marginBottom: '1%'}}>
              {locale.CLAUSE.ALREADY_HAVE_AN_ACCOUNT}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.SignIn)}>
              <Text style={styles.footerText}>{locale.LABEL.SIGN_IN}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
