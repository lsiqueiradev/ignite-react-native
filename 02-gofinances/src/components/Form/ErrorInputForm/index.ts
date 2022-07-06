import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Error = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};
  margin-bottom: 7px;
`;