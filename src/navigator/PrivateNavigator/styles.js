import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  createPackageContainer: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    backgroundColor: 'yellow',
  },
  createPackage: {color: 'red', fontSize: 20},
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  closeCreatePackage: {
    position: 'absolute',
    top: 60,
    right: 30,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  x: {color: 'red', fontSize: 25},
  addCreatePackage: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 50,
    right: 30,
    bottom: 320,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
