import {firebase} from '@react-native-firebase/database';

export const database = () => {
  return firebase
    .app()
    .database('https://wanderly-project-default-rtdb.firebaseio.com/');
};

export const userRef = id => {
  const reference = database().ref(`users/${id}`);
  return reference;
};

export const setCurrentUserLocation = (id, currentLocation) => {
  userRef(id).push({currentLocation});
};
