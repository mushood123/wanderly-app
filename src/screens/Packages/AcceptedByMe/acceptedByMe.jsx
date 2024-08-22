import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {firebase} from '../../../firebase';
import {Card} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setAcceptedPackage} from '../../../redux/Packages';

export const AcceptedByMe = () => {
  const {user} = useSelector(state => state.auth);
  const {acceptedPackage} = useSelector(state => state.package);
  const dispatch = useDispatch();
  useEffect(() => {
    const onValueChange = firebase.getCurrentUserAcceptedOffers(user.uid, {
      successCB: data => {
        dispatch(setAcceptedPackage(data));
      },
    });
    return () => {
      firebase.getOffersCloseConnection(onValueChange);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {acceptedPackage &&
        Object.keys(acceptedPackage).map((packageId, index) => {
          const {packageDetails, uid, profile} = acceptedPackage[packageId];
          const {userData} = profile;
          return (
            <Card
              key={`${packageId}_${index}_accepted`}
              name={userData?.name}
              showButton={false}
              uid={uid}
              currentUserId={user.uid}
              {...packageDetails}
            />
          );
        })}
    </ScrollView>
  );
};
