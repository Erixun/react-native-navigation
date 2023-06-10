import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Meal Details',
  'MyStack'
>;

const MealDetails = ({ navigation, route }: Props) => {
  const { meal, mealId } = route.params;
  
  console.log(meal);

  const [isFavoriteMeal, setIsFavoriteMeal] = useState(meal.isFavorite);
const toggleFavorite = () => {
  setIsFavoriteMeal(!isFavoriteMeal);
};
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name={isFavoriteMeal ? 'ios-star' : 'ios-star-outline'}
          size={24}
          color="white"
          onPress={toggleFavorite}
        />
      ),
    });
  }
  , [navigation, isFavoriteMeal]);

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mealImage}>
          <Image
            resizeMode="cover"
            style={{ height: '100%', width: '100%' }}
            source={{ uri: meal.imageUrl }}
          />
        </View>
        {/* Generate a list of meal ingredients: */}
        <View style={styles.ingredients}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>
            Ingredients:
          </Text>
          {/* <List
            data={meal.ingredients}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item) => item}
          /> */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={{fontSize: 16}}>{meal.ingredients.join(', ')}.</Text>
            {/* {meal.ingredients.map((ingredient) => {
              return (
                <Text style={styles.li} key={ingredient}>
                  {ingredient}
                </Text>
              );
            })} */}
          </View>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 5 }}>
            Steps:
          </Text>

          {meal.steps.map((step, i) => (
            <Text style={[styles.li, {fontSize: 16}]} key={i}>
              {i + 1}. {step}
            </Text>
          ))}
        </View>

        {/* LIST STEPS */}

        {/* <Text>{meal.title}</Text> */}
        {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      </ScrollView>
    </View>
  );
};

export default MealDetails;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
    padding: 15,
    backgroundColor: 'transparent',
  },
  scrollView: {
    flex: 1,
    // width: '100%',
    // backgroundColor: 'transparent',
    flexDirection: 'column',
    gap: 200,
  },

  mealImage: {
    width: '100%',
    aspectRatio: 2,
    // height: 200,
    backgroundColor: 'transparent',

    // margin: windowWidth * 0.05, // 15,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },

  ingredients: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  li: {
    padding: 5,
  },
});
