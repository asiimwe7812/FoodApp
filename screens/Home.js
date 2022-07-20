import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import ButtomTabs from "../components/ButtomTabs";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";
const YELP_API_KEY =
  "yyylJH-NlvascsyBCozEullJHwjIskkOl5MWJyIGmRL0pLUKWOsMVfXQ1qvLSvAYxvwf0rgOo4hbVer3GXbtH_UyTW5iNLrCCRnMQ4drQEVaYZl5napylVr48aXWYnYx";

const Home = () => {
  const [city, setCity] = useState("SanDiego");
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOption = {
      headers: {
        Authorization: ` Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpurl, apiOption)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
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
    <View style={{ backgroundColor: "#eee", flex: 1, paddingTop: 30 }}>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <ButtomTabs />
    </View>
  );
};

export default Home;
