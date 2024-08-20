import {StyleSheet} from 'react-native';
import {font} from '../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#576dd7',
    paddingVertical: 60,
  },
  logo: {alignSelf: 'center'},
  formField: {
    margin: 10,
  },
  buttonContainer: {
    width: '50%',
    height: 50,
    marginHorizontal: 'auto',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    borderRadius: 60,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: font.heading,
  },
  cardStyle: {
    textColor: 'black',
    borderWidth: 0,
    placeholderColor: 'yellow',
    backgroundColor: '#FFFFFF',
  },
  containerStyle: {
    width: '100%',
    height: 60,
  },
  profilePicContainer: {alignSelf: 'center'},
  profilePic: {
    height: 250,
    width: 250,
    backgroundColor: 'grey',
    borderRadius: 250 / 2,
    marginBottom: 30,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  profilePicLoader: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  profilePicReject: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profilePicAccept: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});
