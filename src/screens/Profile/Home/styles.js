import {StyleSheet} from 'react-native';
import {font} from '../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#576dd7',
    paddingVertical: 60,
  },
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
});
