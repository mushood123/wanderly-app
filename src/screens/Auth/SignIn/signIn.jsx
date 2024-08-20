import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {styles} from './styles';
import {FormField, Text} from '../../../components';
import {useFormik} from 'formik';
import {guide_explain_tourist} from '../../../assets';
import {formInit, signInCallback} from './utils';
import {LanguageContext} from '../../../contexts';
import {ROUTES} from '../../../navigator';

export const SignIn = ({navigation}) => {
  const {locale} = useContext(LanguageContext);
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
          <Text style={styles.welcomeText}>{locale.CLAUSE.WELCOME_BACK}</Text>
          <Text style={styles.loginText}>
            {locale.CLAUSE.LOGIN_TO_YOUR_ACCOUNT}
          </Text>
          <FormField
            value={values.email}
            handleOnChangeText={handleChange('email')}
            title={locale.LABEL.EMAIL}
            style={styles.test}
            isValidate={errors?.email}
          />
          {errors?.email && <Text style={{color: 'red'}}>{errors?.email}</Text>}
          <FormField
            value={values.password}
            style={styles.test}
            title={locale.LABEL.PASSWORD}
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
            <Text style={styles.loginButton}>{locale.LABEL.LOGIN}</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerGap}>
              {locale.CLAUSE.DO_NOT_HAVE_AN_ACCOUNT}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.SignUp)}>
              <Text style={styles.footerText}>{locale.LABEL.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
