import React, { useEffect, useState } from "react";
import Category from "../models/category";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";


import MealCategoryItem from "../components/MealCategoryItem";

const fetchCategoriesFromApi = async () => {
  // const response = await fetch(
  //   "https://react-native-course-7c9d7.firebaseio.com/categories.json"
  // );

  //dynamically import const CATEGORIES from dummy-data.ts in the assets folder, return value as if it was fetched from the API
  const response = await import('../assets/dummy-data').then(module => {
    return {
      json: async () => module.CATEGORIES
    }
  });

  const data = await response.json();
  const categories: Category[] = [];
  for (const key in data) {
    categories.push(new Category(key, data[key].title, data[key].color));
  }
  return categories;
}

const MealCategories = ({ navigation }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetchCategoriesFromApi();
      setCategories(data);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);


  const renderMealCategoryItem = ({ item }: { item: Category }) => (
    <MealCategoryItem
      item={item}
      onPress={() => navigation.navigate('Meals', { category: item })}
    />
  );

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <FlatList
          data={categories}
          renderItem={renderMealCategoryItem}
          numColumns={2}
        />
      )}
    </View>
  );
}

export default MealCategories;

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
