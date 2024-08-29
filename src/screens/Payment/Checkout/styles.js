import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  containerStyle: {
    width: '80%',
    height: 210,
    marginTop: 100,
  },
});
