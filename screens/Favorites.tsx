import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RootStackParamList } from '../App';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Drawer', 'Stack'>;

const Favorites = ({ route, navigation }: Props) => {
  
  // const {toggleDrawer} = useNavigation();
  const openDrawer = () => {

    
    navigation.dispatch(DrawerActions.toggleDrawer()) //toggleDrawer()
  };
  return (
    <View style={styles.screen}>
      <Text>Favorites</Text>
      <Pressable
        android_ripple={{ color: '#CCCCCC' }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : [styles.button]
        }
        onPress={openDrawer}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>Open Drawer</Text>
        </View>
      </Pressable>
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
