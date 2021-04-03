import React, { useState, useCallback } from "react";
import { Header, Icon, Badge, withBadge } from "react-native-elements";
import { Dimensions, Text, View, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Extension from "estore/containers/Extension";
import ProductRecommendation from "estore/containers/ProductRecommendation";
import FlashSale from "estore/containers/FlashSale";
import Banners from "estore/containers/Banner";
import { ProductByCategories } from "estore/containers/Products";
import Categories from "estore/containers/Categories";
const { width, height } = Dimensions.get("screen");

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const FilterProductsScreen = ({ navigation, route }: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <React.Fragment>
     
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ProductByCategories navigation={navigation} route={route} />
      </ScrollView>
    </React.Fragment>
  );
};
export default FilterProductsScreen;
