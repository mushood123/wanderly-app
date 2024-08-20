import {StyleSheet, Dimensions} from 'react-native';
import {font} from '../../../theme/fonts';

const screenDimensions = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#576dd7',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  imageContainer: {
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    overflow: 'hidden',
  },
  image: {
    height: screenDimensions.height * 0.4,
    width: screenDimensions.width * 1,
    resizeMode: 'cover',
  },
  fieldsContainer: {
    flex: 0.7,
    marginHorizontal: 20,
  },

  welcomeText: {
    marginTop: '10%',
    marginBottom: 5,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: font.heading,
  },
  signInText: {
    marginTop: '1%',
    marginBottom: 20,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  userInput: {
    marginTop: '9%',
    height: '7%',
    width: '80%',
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#E0B0FF',
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#293952',
  },
  footerGap: {marginBottom: '1%'},
  signUpButton: {
    color: 'white',
    textAlign: 'center',
    padding: 16,
    fontSize: 16,
  },
  footerContainer: {
    marginTop: '4%',
    alignItems: 'center',
    display: 'flex',
    height: 'auto',
    width: 'auto',
  },
  footerText: {
    color: '#32CD32',
    fontSize: 15,
  },
  test: {
    marginVertical: 12,
  },
  alert: {color: 'red'},
});
