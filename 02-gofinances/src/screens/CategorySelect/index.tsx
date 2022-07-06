import { Button } from '../../components/Form/Button';
import { categories } from '../../utils/categories';
import * as S from './styles';

export interface CategoryProps {
  key: string;
  name: string;
  icon: string;
}

interface CategorySelectProps {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: CategorySelectProps) {


  function handleCategorySelect(category: CategoryProps) {
    setCategory(category);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <S.CategoryList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.CategorySeparator />}
      />

      <S.Footer>
        <Button
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </S.Footer>

    </S.Container>
  );
}