import { View, Text } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetail/About';
import MenuItems from '../components/RestaurantDetail/MenuItems';

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}