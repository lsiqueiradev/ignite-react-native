import { TextInputProps } from 'react-native';

import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

import * as S from './styles';

import { FormDataProps } from '../../../screens/Register';
import { Error } from '../ErrorInputForm';

interface InputFormProps extends TextInputProps {
  control: Control<FormDataProps>;
  name: 'name' | 'amount';
  error: string | undefined;
}

export function InputForm({
  control,
  name,
  error,
  ...rest
}: InputFormProps) {
  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...rest}
            onChangeText={onChange}
            value={value as string}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </S.Container>
  );
}