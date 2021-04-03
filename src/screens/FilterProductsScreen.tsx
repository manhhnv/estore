import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ProductByCategories } from "estore/containers/Products";
import { RouteProp } from "@react-navigation/core";
import { HomeStackParamList } from "estore/types";
import { View } from "react-native";

type FilterProductsScreenProps = {
  route: RouteProp<HomeStackParamList, "FilterProduct">
}

const FilterProductsScreen = ({ route }: FilterProductsScreenProps) => {
  return (
    <React.Fragment>
     
      <View
        style={{ backgroundColor: "#fff", flex: 1 }}
        
      >
        <ProductByCategories route={route} />
      </View>
    </React.Fragment>
  );
};
export default FilterProductsScreen;
