import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }: any) => {
  const { category } = route.params;
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await import('../assets/dummy-data').then((module) => {
        return {
          json: async () => module.MEALS,
        };
      });
      //fetchMealsFromApi(category);
      const data = await response.json();
      console.log(category);
      const filteredMeals = data.filter((meal: Meal) => {
        console.log(meal);
        return meal.categoryIds.includes(category.id);
      });
      setMeals(filteredMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  const renderMealItem = ({ item }: { item: Meal }) => (
    <MealItem
      item={item}
      onPress={() => navigation.navigate('Meal Details', { meal: item })}
    />
  );

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={meals}
          renderItem={renderMealItem}
          numColumns={1}
        />
      )}
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
