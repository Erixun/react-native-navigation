import { View, Button, Text, StyleSheet, Image } from 'react-native';

const MealDetails = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { meal } = route.params;
  console.log(meal);
  return (
    <View style={styles.screen}>
      <View style={styles.mealImage}>
        <Image
          resizeMode="cover"
          style={{ height: '100%', width: '100%' }}
          source={{ uri: meal.imageUrl }}
        />
      </View>
      <Text>{meal.title}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  mealImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
});
