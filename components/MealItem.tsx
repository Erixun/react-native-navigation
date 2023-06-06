import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Meal from '../models/meal';

const MealItem = ({ item, onPress }: { item: Meal; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.gridItem}>
      <View style={{ ...styles.container }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ccc',
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'right',
  },
});
