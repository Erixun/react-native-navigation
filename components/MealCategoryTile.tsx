import { View, Text, Pressable, Platform } from 'react-native';
import Category from '../models/category';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MealCategoryTile = ({
  item,
  onPress,
}: {
  item: Category;
  onPress: () => void;
}) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: '#CCCCCC' }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : [styles.button]
        }
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: item.color }]}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealCategoryTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    width: 150,
    backgroundColor: 'transparent',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    elevation: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
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
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
