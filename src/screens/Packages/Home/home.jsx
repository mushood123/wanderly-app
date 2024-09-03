import React, {useEffect, useCallback} from 'react';
import {ScrollContainer} from './styles';
import {Card} from '~src/components';
import {firebase} from '~src/firebase';
import {useSelector} from 'react-redux';
import {getAllOffer} from '~src/redux/Packages';

export const Home = () => {
  const {allOffers} = useSelector(state => state.package);
  const {user} = useSelector(state => state.auth);
  useEffect(() => {
    getAllOffer();
  }, []);
  const onBuyPressed = useCallback((pid, uid) => {
    firebase.setCurrentUserAcceptedOffers(pid, uid);
  }, []);
  return (
    <ScrollContainer $dark={true}>
      {allOffers &&
        Object.keys(allOffers).map((packageId, index) => {
          const {packageDetails, uid, profile} = allOffers[packageId];
          const {userData} = profile;
          return (
            user?.uid !== uid && (
              <Card
                key={`${packageId}_${index}_all`}
                offer={allOffers[packageId]}
                packageId={packageId}
                name={userData?.name}
                showButton={true}
                uid={uid}
                onBuyPressed={onBuyPressed}
                currentUserId={user?.uid}
                {...packageDetails}
              />
            )
          );
        })}
    </ScrollContainer>
  );
};
