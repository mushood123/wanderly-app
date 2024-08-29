import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #00000090;
  justify-content: center;
  padding-horizontal: 20px;
`;

export const CloseModalButton = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  right: 30px;
  background-color: pink;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
export const ModalButtonText = styled.Text`
  color: ${props => (props.$close ? 'red' : 'green')};
  font-size: 30px;
`;

export const AddPackageButton = styled.TouchableOpacity`
  position: absolute;
  background-color: #90ee90;
  width: 50px;
  height: 50px;
  right: 30px;
  bottom: 300px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
export const ErrorText = styled.Text`
  margin-bottom: 10px;
  color: red;
`;
