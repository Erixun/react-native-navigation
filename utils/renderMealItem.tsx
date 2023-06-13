import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Meal Details'
>;
const renderMealItem = ({ item }: { item: Meal }) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <MealItem
      item={item}
      onPress={() =>
        navigation.navigate('Meal Details', { meal: item, mealId: item.id })
      }
    />
  );
};

export default renderMealItem;
