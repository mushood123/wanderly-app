import {firebase} from '@react-native-firebase/database';
import {firebaseDB} from '../assets';

export const database = () => {
  return firebase.app().database(firebaseDB);
};

export const userRef = id => {
  const reference = database().ref(`users/${id}`);
  return reference;
};

export const getUser = (id, {successCB}) => {
  database()
    .ref(`users/${id}`)
    .on('value', snapshot => successCB(snapshot.val()));
};

export const setUser = (id, data, {successCB}) => {
  userRef(id)
    .child('userData')
    .set(data)
    .then(() => successCB());
};

export const setCurrentUserLocation = (id, currentLocation) => {
  userRef(id).child('locations').set({currentLocation});
};

export const setCurrentUserRole = (id, role = 1) => {
  userRef(id).child('role').set(role);
};

export const createOffer = (uid, packageDetails, profile = {}) => {
  database().ref('orders').push({uid, packageDetails, profile});
};

export const getOffers = ({successCB}) => {
  return database()
    .ref('orders')
    .on('value', snapshot => successCB(snapshot.val()));
};

export const getOffersCloseConnection = CB => {
  database().ref('orders').off('value', CB);
};

export const getCurrentUserCreatedOffers = (uid, {successCB}) => {
  console.log('LLLL', uid);
  database()
    .ref('orders')
    .orderByChild('uid')
    .equalTo(uid)
    .on('value', snapshot => successCB(snapshot.val()));
};

export const getCurrentUserAcceptedOffers = (uid, {successCB}) => {
  database()
    .ref('orders')
    .orderByChild(`acceptedBy/${uid}`)
    .equalTo(true)
    .on('value', snapshot => successCB(snapshot.val()));
};
