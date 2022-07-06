import { Highlight } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardDataProps } from '../../components/TransactionCard';

import * as S from './styles';

export interface DataListProps extends TransactionCardDataProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'income',
      title: 'Desenvolvimento de Site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '03/07/2022'
    },
    {
      id: '2',
      type: 'outcome',
      title: 'Hamburguer Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '03/07/2022'
    },
    {
      id: '3',
      type: 'outcome',
      title: 'Aluguel do apartametno',
      amount: 'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: '03/07/2022'
    }
  ];

  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{ uri: 'https://github.com/lsiqueiradev.png' }}
            />
            <S.User>
              <S.UserGreeting>Olá, </S.UserGreeting>
              <S.UserName>Lucas</S.UserName>
            </S.User>
          </S.UserInfo>

          <S.LogoutButton
            onPress={() => {}}
          >
            <S.Icon name="power" />
          </S.LogoutButton>
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCards>
        <Highlight
          type="up"
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 3 de julho"
        />
        <S.HighlightCardGap />
        <Highlight
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 3 de julho"
        />
        <S.HighlightCardGap />
        <Highlight
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 03 de julho"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.TransactionsTitle>Listagem</S.TransactionsTitle>

        <S.TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
          ItemSeparatorComponent={() => <S.TransactionListGap />}
        />
      </S.Transactions>
    </S.Container>
  );
}