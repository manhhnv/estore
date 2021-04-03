import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useProductByCategoriesQuery } from "estore/graphql/generated";
import Grid from "estore/components/ProductsList/Grid";
import List from "estore/components/ProductsList/List";
import GridPlaceholder from "estore/components/templates/GridPlaceholder";
import styles from "./styles";
import FilterSelection from "estore/components/FilterSelection";
import { RouteProp } from "@react-navigation/core";
import { HomeStackParamList } from "estore/types";
import { Image } from 'react-native-elements';

type ProductByCategoriesProps = {
  route: RouteProp<HomeStackParamList, "FilterProduct">
}

const ProductByCategories = ({ route }: ProductByCategoriesProps) => {
  const [grid, setGrid] = useState(true);
  const { data, loading, error, called } = useProductByCategoriesQuery({
    variables: { categoryId: route.params.categoryId },
  });
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  if (called && loading) {
    return <GridPlaceholder />
  }
  if (data && data.products && data.products.items) {
    return (
      <React.Fragment>
        {data.products.total === 0 ? (
          <>
            <Text style={styles.listProductName}>
              No Product found in this category
            </Text>
          </>
        ) : (
          <>
            <FilterSelection grid={grid} setGrid={setGrid} />
            {grid ? (
              <Grid products={data.products.items} />
            ) : (
              <List products={data.products.items} />
            )}
          </>
        )}

      </React.Fragment>
    );
  }
  return <View></View>;
};
export default ProductByCategories;
