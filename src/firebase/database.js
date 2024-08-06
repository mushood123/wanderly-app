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
