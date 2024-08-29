import {font} from '../../theme/fonts';
import styled from 'styled-components/native';
import {Button} from '../Button/button';

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

export const PackageContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
`;
export const PackageHeadings = styled.Text`
  font-family: ${font.heading};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
`;
export const PackageDetails = styled.Text`
  font-size: 15px;
`;

export const PackageDetailsWithMargin = styled(PackageDetails)`
  margin-bottom: 5px;
`;
export const TextCenter = styled.Text`
  text-align: center;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 10px;
  padding-vertical: 20px;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
`;
export const ButtonText = styled.Text`
  font-family: ${font.heading};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
`;
