import { createDrawerNavigator } from '@react-navigation/drawer';
import MealCategories from '../screens/MealCategories';
import Favorites from '../screens/Favorites';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={
      {
        drawerStyle: {
          backgroundColor: '#f8e9bd',
        },
        drawerActiveTintColor: '#0d4739',
        drawerActiveBackgroundColor: '#ecbb27',
        drawerLabelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }
    }>
      <Drawer.Screen
        name="Meal Categories"
        component={MealCategories}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="ios-restaurant" size={20} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'My Favorites',
          drawerIcon: ({color, size}) => (
            <Ionicons name="ios-heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
