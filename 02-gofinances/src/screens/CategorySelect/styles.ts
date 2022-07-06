import { FlatListProps } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

import { CategoryProps } from '.';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Category {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.colors.background};
`;

export const Header = styled(GestureHandlerRootView)`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const CategoryList = styled(
 FlatList as new (props: FlatListProps<CategoryProps>) => FlatList<CategoryProps>
)`
  flex: 1;
  width: 100%;
`;

export const Category = styled(TouchableOpacity)<Category>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, isActive }) => 
    isActive ? theme.colors.secondary_light : theme.colors.background
  };
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const CategorySeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;