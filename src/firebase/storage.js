/*
import storage from '@react-native-firebase/storage';
import {setUser} from './database';

export const uploadImageOfCurrentUser = async (user, uri, {successCB}) => {
  const reference = storage().ref(`/users/${user.uid}/profileImage`);
  await reference.putFile(uri);
  const profileImage = await reference.getDownloadURL();
  const updatedUser = {
    ...JSON.parse(JSON.stringify(user)),
    userData: {...user.userData, profileImage},
  };
  setUser(user?.uid, updatedUser.userData, {
    successCB: () =>
      successCB({user: updatedUser, message: 'image updated successfully'}),
  });
}; 
 */

import storage from '@react-native-firebase/storage';
import {setUser} from './database';

export const uploadImageOfCurrentUser = async (user, uri, {successCB}) => {
  const reference = storage().ref(`/users/${user.uid}/profileImage`);
  const task = reference.putFile(uri);
  task.on('state_changed', taskSnapshot => {
    console.log(
      `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
    );
  });
  task.then(async () => {
    console.log('Image uploaded to the bucket!');
    const profileImage = await reference.getDownloadURL();
    const updatedUser = {
      ...JSON.parse(JSON.stringify(user)),
      userData: {...user.userData, profileImage},
    };
    setUser(user?.uid, updatedUser.userData, {
      successCB: () =>
        successCB({user: updatedUser, message: 'image updated successfully'}),
    });
  });
};
