import { RectButtonProps } from 'react-native-gesture-handler';

const icons = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
}

interface TransactionTypeButtonProps extends RectButtonProps {
  type: 'income' | 'outcome';
  title: string;
  isActive: boolean;
}

import * as S from './styles';

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: TransactionTypeButtonProps) {
  return (
    <S.Container
      isActive={isActive}
      type={type}
    >
      <S.Button
        {...rest}
        isActive={isActive}
        type={type}
      >
        <S.Icon name={icons[type]} type={type} />
        <S.Title>
          {title}
        </S.Title>
      </S.Button>
    </S.Container>
  )
}