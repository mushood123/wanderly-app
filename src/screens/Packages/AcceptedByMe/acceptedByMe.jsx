import React, { useCallback, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { Card } from '~src/components';
import { firebase } from '~src/firebase';
import { getAcceptedPackage } from '~src/redux/Packages';
import { ScrollContainer } from './styles';

export const AcceptedByMe = () => {
  const { user } = useSelector(state => state.auth);
  const { acceptedPackage } = useSelector(state => state.package);

  useEffect(() => {
    getAcceptedPackage(user);
  }, []);

  const fadeOut = useCallback(
    (ref, packageId) => {
      ref?.bounceOut().then(() => {
        firebase.removeCurrentUserAcceptedOffers(packageId, user?.uid);
        ref.bounceInUp();
      });
    },
    [acceptedPackage],
  );

  return (
    <ScrollContainer $dark>
      {acceptedPackage &&
        Object.keys(acceptedPackage).map((packageId, index) => {
          const { packageDetails, uid, profile } = acceptedPackage[packageId];
          const { userData } = profile;
          let cardRef = null;
          return (
            <Animatable.View
              key={`${packageId}_${index}_accepted`}
              ref={_cardRef => (cardRef = _cardRef)}
              animation="bounceIn"
            >
              <TouchableOpacity
                onLongPress={() => {
                  fadeOut(cardRef, packageId);
                }}
              >
                <Card
                  name={userData?.name}
                  showButton={false}
                  uid={uid}
                  currentUserId={user?.uid}
                  {...packageDetails}
                />
              </TouchableOpacity>
            </Animatable.View>
          );
        })}
    </ScrollContainer>
  );
};
