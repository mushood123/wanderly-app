import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Card, EditModal} from '../../../components';
import {firebase} from '../../../firebase';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {useAnimatedStyle} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {setCreatedOffers, setModalVisibility} from '../../../redux/Packages';

export const OffersByMe = () => {
  const {modalVisibility, createdOffer} = useSelector(state => state.package);
  const [requestedPackage, setRequestedPackage] = useState(null);
  const {user} = useSelector(state => state.auth);
  const {userData} = user;
  const dispatch = useDispatch();
  useEffect(() => {
    const onValueChange = firebase.getCurrentUserCreatedOffers(user.uid, {
      successCB: data => {
        dispatch(setCreatedOffers(data));
      },
    });
    return () => {
      firebase.getOffersCloseConnection(onValueChange);
    };
  }, []);

  const onEditPressed = useCallback(offer => {
    setRequestedPackage(offer);
    dispatch(setModalVisibility(true));
  }, []);

  const RightAction = ({prog, drag, packageId}) => {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{translateX: drag.value + 50}],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <TouchableOpacity
          style={styles.slider}
          onPress={() => {
            console.log('delete package', packageId);
            firebase.deleteCurrentUserCreatedOffer(packageId);
          }}>
          <View>
            <Text style={styles.sliderText}>D</Text>
            <Text style={styles.sliderText}>E</Text>
            <Text style={styles.sliderText}>L</Text>
            <Text style={styles.sliderText}>E</Text>
            <Text style={styles.sliderText}>T</Text>
            <Text style={styles.sliderText}>E</Text>
          </View>
        </TouchableOpacity>
      </Reanimated.View>
    );
  };

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          {createdOffer &&
            Object.keys(createdOffer).map((packageId, index) => {
              const {packageDetails} = createdOffer[packageId];
              return (
                <ReanimatedSwipeable
                  key={`${packageId}_${index}_created`}
                  overshootRight={true}
                  dragOffsetFromRightEdge={10}
                  renderRightActions={(prog, drag) => (
                    <RightAction
                      prog={prog}
                      drag={drag}
                      packageId={packageId}
                    />
                  )}>
                  <Card
                    offer={createdOffer[packageId]}
                    packageId={packageId}
                    name={userData?.name}
                    showButton
                    uid={user.uid}
                    currentUserId={user.uid}
                    onEditPressed={onEditPressed}
                    {...packageDetails}
                  />
                </ReanimatedSwipeable>
              );
            })}
        </ScrollView>
      </GestureHandlerRootView>
      {requestedPackage && (
        <EditModal
          requestedPackage={requestedPackage}
          setRequestedPackage={setRequestedPackage}
          isCreateOffer={false}
        />
      )}
    </>
  );
};
