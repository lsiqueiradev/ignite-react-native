import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import * as S from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: ButtonProps) {
  return (
    <GestureHandlerRootView>
      <S.Container
        {...rest}
        onPress={onPress}
      >
        <S.Title>{title}</S.Title>
      </S.Container>
    </GestureHandlerRootView>
  );
}