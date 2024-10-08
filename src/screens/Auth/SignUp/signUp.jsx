import React, { useCallback } from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { guideExplainTourist } from '~src/assets';
import { FormField, Text } from '~src/components';
import { ROUTES } from '~src/routes';
import { styles } from './styles';
import { formInit, signUpCallback } from './utils';

export default () => {
    const navigation = useNavigation();
    const form = useFormik(formInit);
    const { locale } = useSelector(state => state.language);

    const { values, errors, handleChange } = form;

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
            keyboardVerticalOffset={30}
        >
            <ScrollView>
                <View>
                    <View style={styles.shadowContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={guideExplainTourist}
                                style={styles.image}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
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
                    {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}
                    <FormField
                        handleOnChangeText={handleChange('newPassword')}
                        title={locale.LABEL.NEW_PASSWORD}
                        style={styles.test}
                        secureTextEntry
                        isValidate={newPasswordError}
                    />
                    {newPasswordError && (
                        <Text style={styles.alert}>{newPasswordError}</Text>
                    )}
                    <FormField
                        handleOnChangeText={handleChange('confirmPassword')}
                        title={locale.LABEL.CONFIRM_PASSWORD}
                        style={styles.test}
                        secureTextEntry
                        isValidate={confirmPasswordError}
                    />
                    {confirmPasswordError && (
                        <Text style={styles.alert}>{confirmPasswordError}</Text>
                    )}

                    <TouchableOpacity
                        onPress={signupPressed}
                        disabled={
                            !!(emailError || newPasswordError || confirmPasswordError)
                        }
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.signUpButton}>{locale.LABEL.SIGN_UP}</Text>
                    </TouchableOpacity>

                    <View style={styles.footerContainer}>
                        <Text style={styles.footerGap}>
                            {locale.CLAUSE.ALREADY_HAVE_AN_ACCOUNT}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTES.SignIn)}
                        >
                            <Text style={styles.footerText}>{locale.LABEL.SIGN_IN}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
