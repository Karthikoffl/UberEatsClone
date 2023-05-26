import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}} >
        <View style={{marginTop: 10, padding: 15, backgroundColor: '#fff'}}>
            <RestaurantImage />
            <RestaurantInfo />
        </View>
    </TouchableOpacity>
  )
}

const RestaurantImage = () => (
    <>
    <Image 
        source={{
            uri: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/kfc-restaurant-exterior.jpg?quality=82&strip=1"
        }}
        style={{width: "100%", height: 180}}
    />
     <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
     </TouchableOpacity>
    </>
);

const RestaurantInfo = () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>KFC Restaurant</Text>
            <Text style={{fontSize: 13, color: "gray"}}>30-45 - min</Text>
        </View>
        <View 
            style={{
                backgroundColor: '#eee',
                height: 30, 
                width: 30, 
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
            }}>
            <Text>4.5</Text>
        </View>
    </View>
);