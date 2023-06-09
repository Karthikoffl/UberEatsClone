import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/Home/HeaderTabs';
import SearchBar from '../components/Home/SearchBar';
import Categories from '../components/Home/Categories';
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/Home/BottomTabs';

const YELP_API_KEY = "uwPPDZx1pBbbJEYJFMC2SKdBUb-6QXhntKXsmryPVbC1yfPfyxeldqzwHBQjWTBg273AaNZpASBhLwkH9mAT4c-ArCGutf1G5Pkny-7LYeWALBgdIcOW9PIzo4pwZHYx";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Chennai");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then(json => setRestaurantData(
        json.businesses.filter((business) => 
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar  cityHandler={setCity}  />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}