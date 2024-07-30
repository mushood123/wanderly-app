import {StyleSheet, Dimensions} from 'react-native';
import {font} from '../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#576dd7',
  },
  shadowContainer: {
    width: '130%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  loginText: {
    marginTop: '2%',
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
  loginButton: {
    color: 'white',
    textAlign: 'center',
    padding: 16,
    fontSize: 16,
  },
  footerContainer: {
    marginTop: '45%',
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
});
