import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealCategories from '../screens/MealCategories';
import Favorites from '../screens/Favorites';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f8e9bd',
        },
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#0d4739',
        tabBarActiveBackgroundColor: '#ecbb27',
        tabBarLabelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <Tabs.Screen
        name="Meal Categories"
        component={MealCategories}
        options={{
          tabBarIcon: (props) => (
            // TabIcon: (props) => (
            <Ionicons name="ios-restaurant" size={20} color={props.color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'My Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
