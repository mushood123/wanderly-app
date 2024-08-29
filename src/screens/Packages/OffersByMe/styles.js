import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView`
  flex-grow: 1;
  background-color: ${({theme}) => theme.backgroundColor};
`;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
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
  x: {color: 'red', fontSize: 20},
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
  slider: {
    flex: 1,
    width: 50,
    backgroundColor: 'purple',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: 100,
    marginHorizontal: 3,
    marginVertical: 5,
  },
  sliderText: {
    marginHorizontal: 'auto',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
