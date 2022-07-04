import * as S from './styles';

interface HighlightProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function Highlight({
  type,
  title,
  amount,
  lastTransaction
}: HighlightProps) {
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={icons[type]} type={type} />
      </S.Header>

      <S.Footer>
        <S.Amount
          type={type}
        >
          {amount}
        </S.Amount>
        <S.LastTransaction
          type={type}
        >
          {lastTransaction}
        </S.LastTransaction>
      </S.Footer>
    </S.Container>
  )
}