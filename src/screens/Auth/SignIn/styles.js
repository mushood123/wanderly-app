import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CBC3E3',
  },
  imageContainer: {
    width: '100%',
    height: '30%',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  welcomeText: {
    marginTop: '5%',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  loginText: {
    marginTop: '1%',
    color: 'white',
    fontSize: 15,
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
    marginTop: '13%',
    height: 40,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#C18FDD',
  },
  loginButton: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  footerContainer: {
    marginTop: '20%',
    alignItems: 'center',
    display: 'flex',
    height: 'auto',
    width: 'auto',
  },
  footerText: {
    color: '#32CD32',
    fontSize: 15,
  },
});
