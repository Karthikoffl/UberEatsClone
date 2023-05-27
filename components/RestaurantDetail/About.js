import { View, Text, Image } from 'react-native'
import React from 'react'

const image = "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123";

const title = "Farmhouse Kitchen Thai Cuisine";
const descriptopn = "Thai - Comfort Food - $$ - :ticket - 4 :star (2913+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={descriptopn} />
    </View>
  );
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180}} />
);

const RestaurantTitle = (props) => (
    <Text 
        style={{
            fontSize: 29, 
            fontWeight: '600', 
            marginTop: 10, 
            marginHorizontal: 15
        }}>{props.title}</Text>
);

const RestaurantDescription = (props) => (
    <Text 
        style={{
            marginTop: 10, 
            marginHorizontal: 15, 
            fontWeight: '400', 
            fontSize: 15.5
        }}>{props.description}</Text>
);