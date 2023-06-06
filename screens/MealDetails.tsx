import { View, Button, Text, StyleSheet } from 'react-native';

const MealDetails = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { meal } = route.params;
  return (
    <View style={styles.screen}>
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
  },
});
