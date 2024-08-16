import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ScrollView, Modal, View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {AuthContext, PackagesContext} from '../../../contexts';
import {Card, FormField} from '../../../components';
import {firebase} from '../../../firebase';
import {formInit} from './utils';
import {useFormik} from 'formik';

export const OffersByMe = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [requestedPackage, setRequestedPackage] = useState(null);

  const {createdOffer, setCreatedOffers} = useContext(PackagesContext);
  const {user} = useContext(AuthContext);
  const {userData} = user;

  useEffect(() => {
    const onValueChange = firebase.getCurrentUserCreatedOffers(user.uid, {
      successCB: data => {
        setCreatedOffers(data);
      },
    });
    return () => firebase.getOffersCloseConnection(onValueChange);
  }, []);

  const onEditPressed = useCallback(offer => {
    setRequestedPackage(offer);
    setModalVisibility(true);
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {createdOffer &&
          Object.keys(createdOffer).map((packageId, index) => {
            const {packageDetails} = createdOffer[packageId];
            return (
              <>
                <Card
                  key={`${packageId}_${index}_created`}
                  offer={createdOffer[packageId]}
                  packageId={packageId}
                  name={userData?.name}
                  showButton
                  uid={user.uid}
                  currentUserId={user.uid}
                  onEditPressed={onEditPressed}
                  {...packageDetails}
                />
              </>
            );
          })}
      </ScrollView>
      <EditModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        requestedPackage={requestedPackage}
        setRequestedPackage={setRequestedPackage}
      />
    </>
  );
};

const EditModal = ({
  modalVisibility,
  setModalVisibility,
  requestedPackage,
  setRequestedPackage,
}) => {
  if (requestedPackage) {
    const form = useFormik(formInit(requestedPackage?.packageDetails || {}));
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

            <FormField
              title={'Places'}
              value={values?.places.toString()}
              handleOnChangeText={handleChange('places')}
              isValidate={errors?.places}
            />
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
                firebase.setOrder(
                  requestedPackage.packageId,
                  {...values, places: [values.places]},
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
