import { TouchableOpacity, View, Text } from "react-native";
import Category from "../models/category";
import { StyleSheet } from "react-native";

const MealCategoryItem = ({ item, onPress }: {item: Category, onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.gridItem}>
      <View style={{ ...styles.container, ...{ backgroundColor: item.color } }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MealCategoryItem;

const styles = StyleSheet.create({
  gridItem: {
    // flex: 1,
    margin: 15,
    height: 150,
    minWidth: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  }
});