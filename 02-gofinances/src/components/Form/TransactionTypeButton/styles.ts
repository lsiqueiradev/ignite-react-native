import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

interface IconsProps {
  type: 'income' | 'outcome';
}

interface ContainerButtonProps {
  type: 'income' | 'outcome';
  isActive: boolean;
}

interface TransactionTypeButton {
  isActive: boolean;
  type: 'income' | 'outcome';
}


export const Container = styled.View<ContainerButtonProps>`
  width: 48%;


  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme, isActive, type }) => 
  isActive ? type  === 'income' ? theme.colors.success_light : theme.colors.attention_light : theme.colors.text};
  border-radius: 5px;


  ${({ theme, isActive, type }) => isActive && type === 'income' && css`
    background-color: ${theme.colors.success_light};
  `}

  ${({ theme, isActive, type }) => isActive && type === 'outcome' && css`
    background-color: ${theme.colors.attention_light};
  `}
`;

export const Button = styled(RectButton)<TransactionTypeButton>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  padding: 13px;
`;


export const Icon = styled(Feather)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type}) => 
    type === 'income' ? theme.colors.success : theme.colors.attention
  };
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;