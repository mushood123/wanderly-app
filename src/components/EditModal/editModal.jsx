import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {FormField} from '../FormField';
import {useFormik} from 'formik';
import {formInit} from './utils';
import {firebase} from '../../firebase';
import {styles} from './styles';

export const EditModal = ({
  modalVisibility,
  setModalVisibility,
  requestedPackage,
  setRequestedPackage,
}) => {
  if (requestedPackage) {
    const places = requestedPackage?.packageDetails?.places;
    const placesString = places.join(',');
    console.log(placesString);
    const form = useFormik(
      formInit(
        {...requestedPackage?.packageDetails, places: placesString} || {},
      ),
    );
    const {values, errors, handleChange} = form;
    return (
      requestedPackage && (
        <Modal
          transparent
          visible={modalVisibility}
          animationType="slide"
          onRequestClose={() => {
            setRequestedPackage(null);
            setModalVisibility(false);
          }}>
          <View style={styles.modalContainer}>
            <FormField
              title={requestedPackage?.hourlyRate}
              style={{marginBottom: 10}}
              value={values.hourlyRate}
              handleOnChangeText={handleChange('hourlyRate')}
              isValidate={errors?.hourlyRate}
            />
            {errors?.hourlyRate && (
              <Text style={{marginVertical: 1, color: 'red'}}>
                {errors?.hourlyRate}
              </Text>
            )}

            <FormField
              title={'Places'}
              value={values?.places.toString()}
              handleOnChangeText={handleChange('places')}
              isValidate={errors?.places}
            />
            {errors?.places && (
              <Text style={{marginVertical: 10, color: 'red'}}>
                {errors?.places}
              </Text>
            )}
            <TouchableOpacity
              onPress={() => {
                setRequestedPackage(null);
                setModalVisibility(false);
              }}
              style={styles.closeCreatePackage}>
              <Text style={styles.x}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={errors?.hourlyRate || errors?.places}
              onPress={() => {
                setRequestedPackage(null);
                setModalVisibility(false);
                const placesString = values.places;
                const _places = placesString.split(',');
                firebase.setOrder(
                  requestedPackage.packageId,
                  {...values, places: _places},
                  {
                    successCB: () =>
                      console.log('Package Updated Successfully'),
                  },
                );
              }}
              style={styles.addCreatePackage}>
              <Text style={{fontSize: 40, color: 'green'}}>+</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )
    );
  }
};
