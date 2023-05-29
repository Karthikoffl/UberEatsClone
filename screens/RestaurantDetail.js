import { View, Text } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetail/About';
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';

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

export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}