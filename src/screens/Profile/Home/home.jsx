import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useFormik} from 'formik';
import {formInit} from './utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {firebase} from '~src/firebase';
import {setUser} from '~src/redux/Auth';
import {FormField, Text} from '~src/components';
import {animLoader} from '~src/assets';
import {IconAvatar, IconTick, IconLogo, IconCross} from '~src/assets';
import {ROUTES} from '~src/navigator';

export const Home = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const [image, setImage] = useState('');
  const {locale} = useSelector(state => state.language);
  const form = useFormik(formInit(user?.userData || {}));
  const {values, errors, handleChange} = form;
  const [imageLoader, setImageLoader] = useState(false);

  const dispatch = useDispatch();

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
      const {assets = []} = useCamera
        ? await launchCamera()
        : await launchImageLibrary();
      if (assets?.length > 0) {
        if (assets[0].type == 'image/jpg') {
          setImage(assets[0]?.uri || '');
        }
      }
    },
    [image],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IconLogo style={styles.logo} height={100} />
      <View style={styles.profilePicContainer}>
        {imageLoader ? (
          <>
            <LottieView
              source={animLoader}
              autoPlay
              loop
              style={styles.profilePicLoader}
            />
          </>
        ) : image || user?.userData?.profileImage ? (
          <>
            <Image
              style={styles.profilePic}
              source={{uri: image || user?.userData?.profileImage}}
            />
            {image && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setImage('');
                  }}
                  style={styles.profilePicReject}>
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
                        dispatch(setUser(null));
                      },
                    });
                  }}
                  style={styles.profilePicAccept}>
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
        <Text style={styles.buttonText}>
          {locale.CLAUSE.SELECT_IMAGE_FROM_GALLERY}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setProfilePic(true)}
        style={styles.buttonContainer}
        disabled={
          errors?.age || errors?.name || errors?.experience || errors?.phone
        }>
        <Text style={styles.buttonText}>
          {locale.CLAUSE.SELECT_IMAGE_FROM_CAMERA}
        </Text>
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
