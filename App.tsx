import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MealCategories from './screens/MealCategories';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealCategoryView from './screens/MealsOverviewScreen';
// const createNativeStackNavigator = require('react-native-screens/createNativeStackNavigator').default;

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
        <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Meal Categories" component={MealCategories} />
        <Stack.Screen name="Meals" component={MealCategoryView} />
        {/* <MealCategories /> */}
      </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
