import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import MealCategories from './screens/MealCategories';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealCategoryView from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails';
import Category from './models/category';
import Meal from './models/meal';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import DrawerNavigator from './navigators/DrawerNavigator';
import TabsNavigator from './navigators/TabNavigator';
import FavoritesContextProvider from './store/context/favoritesContext';
import { Provider } from 'react-redux';
import store from './store/redux/store';

export type RootStackParamList = {
  'Meal Categories': undefined;
  Meals: { category: Category; categoryId: string };
  'Meal Details': { meal: Meal; mealId: string };
  Favorites: undefined;
  Drawer: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) return null;

  return (
    <>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <StatusBar style="light" />
        <NavigationContainer>
          <View style={styles.container}>
            <Stack.Navigator
              screenOptions={{
                contentStyle: {
                  backgroundColor: '#f8e9bd',
                },
                headerStyle: {
                  backgroundColor: '#0d4739',
                },
                headerTintColor: 'white',
              }}
            >
              {/* <Stack.Screen name="Meal Categories" component={MealCategories} /> */}
              {/* <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          /> */}
              <Stack.Screen
                name="Tabs"
                component={TabsNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Meals"
                component={MealCategoryView}
                options={({ route }) => ({
                  title: route.params.category.title,
                })}
              />
              <Stack.Screen
                name="Meal Details"
                component={MealDetails}
                options={({ route }) => ({
                  title: route.params.meal.title,
                  isFavorite: false, //route.params.meal.isFavorite,
                  headerBackTitle: 'Back',
                  headerRight: () => {
                    const isFavoriteMeal =
                      route.params.meal.isFavorite ?? false;
                    const [isFavorite, setIsFavorite] =
                      useState(isFavoriteMeal);

                    const toggleFavorite = () => {
                      setIsFavorite(!isFavorite);
                    };
                    return (
                      <View style={{ marginRight: 10 }}>
                        <Pressable
                          onPress={toggleFavorite}
                          style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                          })}
                        >
                          <Ionicons
                            name={isFavorite ? 'heart' : 'heart-outline'}
                            size={24}
                            color="white"
                          />
                        </Pressable>
                      </View>
                    );
                  },
                })}
              />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
