import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MealCategories from './screens/MealCategories';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealCategoryView from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Text>Hello World!!!!</Text> */}
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={
          {
            contentStyle: {
              backgroundColor: '#f8e9bd',
            },
            headerStyle: {
              backgroundColor: '#0d4739',
            },
            headerTintColor: 'white',
          }
        }>
          <Stack.Screen name="Meal Categories" component={MealCategories} />
          <Stack.Screen name="Meals" component={MealCategoryView} />
          <Stack.Screen name="Meal Details" component={MealDetails} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
