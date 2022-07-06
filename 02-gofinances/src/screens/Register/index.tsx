import { useState } from 'react';

import {
  Keyboard,
  Modal
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Error } from '../../components/Form/ErrorInputForm';

import { CategorySelect } from '../CategorySelect';

import * as S from './styles';
import { InputForm } from '../../components/Form/InputForm';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface FormDataProps {
  name: string;
  amount: string;
}

const schema = Yup.object({
  name: Yup
    .string()
    .required('O Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
})

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [isCategoryModalopen, setIsCategoryModalOpen] = useState(false);
  const [transactionError, setTransactionError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
    icon: 'any'
  });


  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema)
  });

  function handleTransactionsTypeSelect(type: 'income' | 'outcome') {
    setTransactionError('');
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryError('');
    setIsCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryError('');
    setIsCategoryModalOpen(false);
  }

  function handleRegister(form: Partial<FormDataProps>) {
    setTransactionError('');
    setCategoryError('');

    if (!transactionType) {
      setTransactionError('O tipo da transação é obrigatório ');
      return;
    }

    if (category.key === 'category') {
      setCategoryError('A categoria é obrigatório ');
      return;
    }


    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.name,
    }

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{ flex: 1 }}
      containerStyle={{ flex: 1 }}
    >
      <S.Container>
        <S.Header>
          <S.Title>Cadastro</S.Title>

        </S.Header>
        <S.Form>
          <S.Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            <S.TransactionsButtonContainer>
              <TransactionTypeButton
                title="Entrada"
                type="income"
                onPress={() => handleTransactionsTypeSelect('income')}
                isActive={transactionType === 'income'}
              />
              <TransactionTypeButton
                title="Saída"
                type="outcome"
                onPress={() => handleTransactionsTypeSelect('outcome')}
                isActive={transactionType === 'outcome'}
              />
            </S.TransactionsButtonContainer>
            {transactionError !== '' && <Error>{transactionError}</Error>}

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
            {categoryError !== '' && <Error>{categoryError}</Error>}
          </S.Fields>

          <Button
            title="Cadastrar"
            onPress={handleSubmit(handleRegister)}
          />
        </S.Form>

        <Modal
          animationType="slide"
          visible={isCategoryModalopen}
        >
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}