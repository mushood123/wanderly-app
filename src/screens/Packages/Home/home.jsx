import React, {useEffect, useCallback} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {Card} from '../../../components';
import {firebase} from '../../../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setAllOffers} from '../../../redux/Packages';

export const Home = () => {
  const {allOffers} = useSelector(state => state.package);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const onValueChange = firebase.getOffers({
      successCB: data => {
        dispatch(setAllOffers(data));
      },
    });
    return () => {
      firebase.getOffersCloseConnection(onValueChange);
    };
  }, []);
  const onBuyPressed = useCallback((pid, uid) => {
    firebase.setCurrentUserAcceptedOffers(pid, uid);
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {allOffers &&
        Object.keys(allOffers).map((packageId, index) => {
          const {packageDetails, uid, profile} = allOffers[packageId];
          const {userData} = profile;
          return (
            user.uid !== uid && (
              <Card
                key={`${packageId}_${index}_all`}
                offer={allOffers[packageId]}
                packageId={packageId}
                name={userData?.name}
                showButton={true}
                uid={uid}
                onBuyPressed={onBuyPressed}
                currentUserId={user.uid}
                {...packageDetails}
              />
            )
          );
        })}
    </ScrollView>
  );
};
