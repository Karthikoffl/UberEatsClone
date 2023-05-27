import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
  {
    title: "Lasagna1",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
  {
    title: "Lasagna2",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
  {
    title: "Lasagna3",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 20,
    },
    titleStyle: {
      fontSize: 19,
      fontWeight: '600',
    }
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
    <View key={index}>
      <View style={styles.menuItemStyle}>
        <BouncyCheckbox iconStyle={{borderColor: 'lightgray'}} fillColor= "green" />
        <FoodInfo food={food} />
        <FoodImage food={food} />
      </View>
      <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}} />
    </View>
    ))}
  </ScrollView>
  );
}

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
  <View>
    <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}} />
  </View>
);