import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
  {
    title: "Mayonnaise",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "₹30",
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2022/06/Homemade-Mayonnaise-with-Salt-and-Pepper.jpg",
  },
  {
    title: "Cheese",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "₹15",
    image: "https://www.usdairy.com/optimize/getmedia/6ab03180-cc90-4a03-a339-13b540ecc8a5/american.jpg.jpg.aspx?format=webp",
  },
  {
    title: "Water",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "₹10",
    image: "https://media.istockphoto.com/id/185072125/photo/bottle-of-spring-water.jpg?s=612x612&w=0&k=20&c=8uCYpbrjtHF9Gx-P3zQ27aDafFB_oJcxzXzry9CrnRc=",
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

export default function MenuItems({restaurantName}) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) => 
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item, 
        restaurantName: restaurantName, 
        checkboxValue: checkboxValue,
      },
    });

    const cartItems = useSelector(
      (state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) => {
      Boolean(cartItems.find((item) => item.title === food.title));
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
    <View key={index}>
      <View style={styles.menuItemStyle}>
        <BouncyCheckbox 
          iconStyle={{borderColor: 'lightgray'}} 
          fillColor= "black" 
          isChecked={isFoodInCart(food, cartItems)}
          onPress={(checkboxValue) => selectItem(food, checkboxValue)}
        />
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