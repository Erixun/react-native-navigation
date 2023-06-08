import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Meal from '../models/meal';

const MealItem = ({ item, onPress }: { item: Meal; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.gridItem}>
      <View style={{ ...styles.container }}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection: "row", justifyContent: "center", gap: 15}}>
          <Text style={styles.tag}>{item.duration}m</Text>
          <Text style={styles.tag}>{item.complexity.toUpperCase()}</Text>
          <Text style={styles.tag}>{item.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
  container: {
    flex: 1,
    paddingBottom: 15,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  tag: {
    fontFamily: 'open-sans',
    fontSize: 14,
    backgroundColor: '#f8e9bd',
    padding: 5,
    borderRadius: 5,
    color: '#04241c',
  },
});
