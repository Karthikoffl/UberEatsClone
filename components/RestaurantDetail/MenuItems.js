import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://recipes.timesofindia.com/thumb/55369113.cms?width=1200&height=900",
  },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
      fontSize: 19,
      fontWeight: '600',
    }
});

export default function MenuItems() {
  return (
    <View>
      <View style={styles.menuItemStyle}>
        <FoodInfo food={foods[0]} />
        <FoodImage food={foods[0]} />
      </View>
    </View>
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