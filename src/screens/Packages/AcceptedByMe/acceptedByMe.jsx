import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollContainer} from './styles';
import {Card} from '~src/components';
import {useSelector} from 'react-redux';
import {firebase} from '~src/firebase';
import {getAcceptedPackage} from '~src/redux/Packages';

export const AcceptedByMe = () => {
  const {user} = useSelector(state => state.auth);
  const {acceptedPackage} = useSelector(state => state.package);

  useEffect(() => {
    getAcceptedPackage(user);
  }, []);

  return (
    <ScrollContainer>
      {acceptedPackage &&
        Object.keys(acceptedPackage).map((packageId, index) => {
          const {packageDetails, uid, profile} = acceptedPackage[packageId];
          const {userData} = profile;
          return (
            <TouchableOpacity
              key={`${packageId}_${index}_accepted`}
              onLongPress={() =>
                firebase.removeCurrentUserAcceptedOffers(packageId, user?.uid)
              }>
              <Card
                name={userData?.name}
                showButton={false}
                uid={uid}
                currentUserId={user?.uid}
                {...packageDetails}
              />
            </TouchableOpacity>
          );
        })}
    </ScrollContainer>
  );
};
