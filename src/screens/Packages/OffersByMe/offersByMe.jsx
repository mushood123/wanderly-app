import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Reanimated, { useAnimatedStyle } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Card, EditModal } from '~src/components';
import { firebase } from '~src/firebase';
import { setModalVisibility, getOfferByMe } from '~src/redux/Packages';
import { styles, ScrollContainer } from './styles';

export const OffersByMe = () => {
  const { createdOffer } = useSelector(state => state.package);
  const [requestedPackage, setRequestedPackage] = useState(null);
  const { user } = useSelector(state => state.auth);
  const { userData } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    getOfferByMe(user);
  }, []);

  const onEditPressed = useCallback(offer => {
    setRequestedPackage(offer);
    dispatch(setModalVisibility(true));
  }, []);

  const RightAction = ({ prog, drag, packageId }) => {
    const styleAnimation = useAnimatedStyle(() => ({
      transform: [{ translateX: drag.value + 50 }],
    }));

    return (
      <Reanimated.View style={styleAnimation}>
        <TouchableOpacity
          style={styles.slider}
          onPress={() => {
            console.log('delete package', packageId);
            firebase.deleteCurrentUserCreatedOffer(packageId);
          }}
        >
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollContainer $dark>
          {createdOffer &&
            Object.keys(createdOffer).map((packageId, index) => {
              const { packageDetails } = createdOffer[packageId];
              return (
                <ReanimatedSwipeable
                  key={`${packageId}_${index}_created`}
                  overshootRight
                  dragOffsetFromRightEdge={10}
                  renderRightActions={(prog, drag) => (
                    <RightAction
                      prog={prog}
                      drag={drag}
                      packageId={packageId}
                    />
                  )}
                >
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
        </ScrollContainer>
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
