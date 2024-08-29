import React, {memo, useCallback} from 'react';
import {Modal} from 'react-native';
import {FormField} from '../FormField';
import {useFormik} from 'formik';
import {formInit} from './utils';
import {firebase} from '../../firebase';
import {
  ModalContainer,
  CloseModalButton,
  ModalButtonText,
  AddPackageButton,
  ErrorText,
} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {setModalVisibility} from '../../redux/Packages';

export const EditModal = memo(
  ({
    requestedPackage,
    setRequestedPackage = () => {},
    isCreateOffer = false,
  }) => {
    const {locale} = useSelector(state => state.language);
    const {user} = useSelector(state => state.auth);
    const {modalVisibility} = useSelector(state => state.package);
    const dispatch = useDispatch();

    const requestedPackageValues = requestedPackage
      ? {
          hourlyRate: requestedPackage.packageDetails?.hourlyRate,
          places: requestedPackage.packageDetails?.places?.join(',') || '',
        }
      : {};
    console.log('requestedPackageValues', requestedPackageValues);
    const form = useFormik(formInit(requestedPackageValues));
    const {uid} = user;
    const {values, errors, handleChange} = form;

    const handleClose = useCallback(() => {
      setRequestedPackage(null);
      dispatch(setModalVisibility(false));
    }, [dispatch, setRequestedPackage]);

    const handleSubmit = useCallback(() => {
      const offerDetails = {
        hourlyRate: values?.hourlyRate,
        places: values?.places.split(',').map(String),
      };

      if (isCreateOffer) {
        firebase.createOffer(
          uid,
          offerDetails,
          JSON.parse(JSON.stringify(user)),
        );
      } else {
        firebase.setOrder(
          requestedPackage.packageId,
          {...values, places: offerDetails.places},
          {successCB: () => console.log('order set')},
        );
      }

      handleClose();
    }, [
      dispatch,
      values,
      isCreateOffer,
      uid,
      user,
      requestedPackage,
      handleClose,
    ]);

    return (
      <Modal
        transparent
        visible={modalVisibility}
        animationType="slide"
        onRequestClose={handleClose}>
        <ModalContainer>
          {errors?.hourlyRate && <ErrorText>{errors?.hourlyRate}</ErrorText>}
          <FormField
            title={
              requestedPackageValues.hourlyRate || locale.CLAUSE.SET_HOURLY_RATE
            }
            style={{marginBottom: 10}}
            value={values?.hourlyRate}
            handleOnChangeText={handleChange('hourlyRate')}
            isValidate={errors?.hourlyRate}
          />
          {errors?.places && <ErrorText>{errors?.places}</ErrorText>}
          <FormField
            title={
              requestedPackageValues.places || locale.CLAUSE.ENTER_PLACE_TO_VIST
            }
            value={values?.places}
            handleOnChangeText={handleChange('places')}
            isValidate={errors?.places}
          />

          <CloseModalButton onPress={handleClose}>
            <ModalButtonText $close={true}>x</ModalButtonText>
          </CloseModalButton>
          <AddPackageButton
            disabled={errors?.hourlyRate || errors?.places}
            onPress={handleSubmit}>
            <ModalButtonText>+</ModalButtonText>
          </AddPackageButton>
        </ModalContainer>
      </Modal>
    );
  },
);
