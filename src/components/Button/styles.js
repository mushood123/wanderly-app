import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => (props.$d ? '#A9A9A9' : '#007BFF')};
  padding-vertical: 12px;
  padding-horizontal: 25px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
