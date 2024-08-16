import React, {useCallback, useContext, useEffect, useState} from 'react';
import {styles} from './styles';
import {AuthContext} from '../../../contexts';
import {FormField, Text} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFormik} from 'formik';
import {formInit} from './utils';
import {ROUTES} from '../../../navigator';
import {firebase} from '../../../firebase';
import {LanguageContext} from '../../../contexts';
import {IconAvatar, IconCross, IconLogo, IconTick} from '../../../assets';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const Home = ({navigation}) => {
  const {user, setUser} = useContext(AuthContext);
  const [image, setImage] = useState('');
  const {locale} = useContext(LanguageContext);
  const form = useFormik(formInit(user?.userData || {}));
  const {values, errors, handleChange} = form;
  const [imageLoader, setImageLoader] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const confirmPressed = useCallback(() => {
    firebase.setUser(
      user?.uid,
      {...values, profileImage: user?.userData?.profileImage},
      {
        successCB: () => {
          const _user = JSON.stringify(user);
          setUser({
            ...JSON.parse(_user),
            userData: {...values, profileImage: user?.userData?.profileImage},
          });
          navigation.navigate(ROUTES.BottomTabNavigator);
        },
      },
    );
  }, [values, user]);

  const setProfilePic = useCallback(
    async (useCamera = false) => {
      const {assets} = useCamera
        ? await launchCamera()
        : await launchImageLibrary();
      if (assets.length > 0) {
        if (assets[0].type == 'image/jpg') {
          setImage(assets[0]?.uri || '');
        }
      }
    },
    [image],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IconLogo style={{alignSelf: 'center'}} height={100} />
      <View style={{alignSelf: 'center'}}>
        {imageLoader ? (
          <ActivityIndicator />
        ) : image || user?.userData?.profileImage ? (
          <>
            <Image
              style={{
                height: 250,
                width: 250,
                backgroundColor: 'grey',
                borderRadius: 250 / 2,
                marginBottom: 30,
                borderWidth: 5,
                borderColor: '#FFFFFF',
              }}
              source={{uri: image || user?.userData?.profileImage}}
            />
            {image && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setImage('');
                  }}
                  style={{position: 'absolute', top: 20, right: 20}}>
                  <IconCross height={40} width={40} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setImageLoader(true);
                    firebase.uploadImageOfCurrentUser(user, image, {
                      successCB: ({user: _updatedUser}) => {
                        setImage('');
                        setImageLoader(false);
                        console.log('_updatedUser', _updatedUser);
                        setUser(_updatedUser);
                      },
                    });
                  }}
                  style={{position: 'absolute', bottom: 50, right: 20}}>
                  <IconTick height={40} width={40} />
                </TouchableOpacity>
              </>
            )}
          </>
        ) : (
          <IconAvatar height={250} width={250} />
        )}
      </View>
      <TouchableOpacity
        onPress={() => setProfilePic()}
        style={styles.buttonContainer}
        disabled={
          errors?.age || errors?.name || errors?.experience || errors?.phone
        }>
        <Text style={styles.buttonText}>{'Select Image from Libray'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setProfilePic(true)}
        style={styles.buttonContainer}
        disabled={
          errors?.age || errors?.name || errors?.experience || errors?.phone
        }>
        <Text style={styles.buttonText}>{'Select Image from Camera'}</Text>
      </TouchableOpacity>
      <FormField value={user?.email} disable style={styles.formField} />
      <FormField
        title={locale.LABEL.NAME}
        handleOnChangeText={handleChange('name')}
        style={styles.formField}
        value={values?.name}
        isValidate={errors?.name}
      />
      <FormField
        title={locale.LABEL.AGE}
        handleOnChangeText={handleChange('age')}
        style={styles.formField}
        value={values?.age}
        isValidate={errors?.age}
      />
      <FormField
        title={locale.LABEL.PHONE}
        handleOnChangeText={handleChange('phone')}
        style={styles.formField}
        value={values?.phone}
        isValidate={errors?.phone}
      />
      <FormField
        title={locale.LABEL.EXPERIENCE}
        handleOnChangeText={handleChange('experience')}
        style={styles.formField}
        value={values?.experience}
        isValidate={errors?.experience}
      />

      <TouchableOpacity
        onPress={confirmPressed}
        style={styles.buttonContainer}
        disabled={
          errors?.age || errors?.name || errors?.experience || errors?.phone
        }>
        <Text style={styles.buttonText}>{locale.LABEL.CONFIRM}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
