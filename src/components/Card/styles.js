import {StyleSheet} from 'react-native';
import {font} from '../../theme/fonts';
import styled from 'styled-components/native';

export const CardContainer = styled.View.attrs(() => ({
  shadowOffset: {
    width: 0,
    height: 2,
  },
}))`
  background-color: powderblue;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;
export const CardContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserContent = styled.View`
  margin-bottom: 10px;
`;
export const UserName = styled.Text`
  font-family: ${font.heading};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Separator = styled.View`
  height: 100%;
  width: 1px;
  background-color: #918d8d;
  margin-horizontal: 10px;
`;
export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'powderblue',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  ranking: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
    marginRight: 'auto',
  },
  rankingText: {
    fontWeight: 'bold',
  },
  content: {
    marginBottom: 10,
  },
  name: {
    fontFamily: font.heading,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    marginBottom: 2,
  },
  stats: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  stat: {
    textAlign: 'center',
  },
  statValue: {
    fontFamily: font.heading,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 15,
  },
  saperator: {
    height: '100%',
    width: 1,
    backgroundColor: '#918d8d',
    marginHorizontal: 10,
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
