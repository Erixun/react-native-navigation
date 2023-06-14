import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { RootStackParamList } from '../App';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { FavoritesContext } from '../store/context/favoritesContext';
import { useContext, useLayoutEffect, useState } from 'react';
import { MEALS } from '../assets/dummy-data';
import { isLoading } from 'expo-font';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import renderMealItem from '../utils/renderMealItem';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';
import { useSelector } from 'react-redux';
import { selectFavoriteMealIds } from '../store/redux/favoritesSlice';
type Props = NativeStackScreenProps<RootStackParamList, 'Drawer', 'Stack'>;

const Favorites = ({ route, navigation }: Props) => {
  // const {toggleDrawer} = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const favoriteMealIds = useSelector(selectFavoriteMealIds);
  // const favoritesCtx = useContext(FavoritesContext);

  const favoriteMeals = //favoritesCtx.favoriteIds.map((mealId) => {
    favoriteMealIds.map((mealId: string) => {
      return MEALS.find((meal) => meal.id === mealId);
    });
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer()); //toggleDrawer()
  };

  const renderMealItem = ({ item }: { item: Meal }) => (
    <MealItem
      item={item}
      onPress={() =>
        navigation.navigate('Meal Details', { meal: item, mealId: item.id })
      }
    />
  );
  return (
    <View style={styles.screen}>
      {/* <Text>Favorites</Text> */}
      {/* <Pressable
        android_ripple={{ color: '#CCCCCC' }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : [styles.button]
        }
        onPress={openDrawer}
      > */}
      {/* <View style={[styles.innerContainer]}>
          <Text style={styles.title}>Open Drawer</Text>
        </View>
      </Pressable> */}
      {/* {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : ( */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={favoriteMeals}
        renderItem={renderMealItem}
        numColumns={1}
      />
      {/* )} */}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  buttonPressed: {
    opacity: 0.5,
    // transform: [{ scale: 1.05 }],
  },
  innerContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'open-sans-bold',
  },
});
