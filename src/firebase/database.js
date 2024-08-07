import {firebase} from '@react-native-firebase/database';
import {firebaseDB} from '../assets';

export const database = () => {
  return firebase.app().database(firebaseDB);
};

export const userRef = id => {
  const reference = database().ref(`users/${id}`);
  return reference;
};

export const setCurrentUserLocation = (id, currentLocation) => {
  userRef(id).child('locations').set({currentLocation});
};

export const setCurrentUserRole = (id, role = 1) => {
  userRef(id).child('role').set(role);
};

export const createOffer = (uid, packageDetails) => {
  database().ref('orders').push({uid, packageDetails});
};

export const getOffers = ({successCB}) => {
  database()
    .ref('orders')
    .on('value', snapshot => successCB(snapshot.val()));
};

export const getCurrentUserCreatedOffers = uid => {
  database()
    .ref('orders')
    .orderByChild('uid')
    .equalTo(uid)
    .on('value', snapshot => console.log('DATA', snapshot.val()));
};
