import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
