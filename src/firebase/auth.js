import auth from '@react-native-firebase/auth';

export const createUserWithEmailAndPassword = ({
  email,
  password,
  successCallback,
  errorCallback,
}) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      successCallback('User account created & signed in!');
    })
    .catch(error => {
      errorCallback(error);
    });
};
export const signInWithEmailAndPassword = ({
  email,
  password,
  successCallback,
  errorCallback,
}) => {
  console.log(email, password);
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      successCallback('signed in!');
    })
    .catch(error => {
      errorCallback(error);
    });
};

export const signOut = successCB => {
  auth()
    .signOut()
    .then(() => {
      successCB();
      console.log('User signed out!');
    });
};

export const onAuthStateChanged = callBack => {
  auth().onAuthStateChanged(callBack);
};
