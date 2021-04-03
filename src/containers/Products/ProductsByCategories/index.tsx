import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { useProductByCategoriesQuery } from "estore/graphql/generated";
import Grid from "estore/components/ProductsList/Grid";
import List from "estore/components/ProductsList/List";
import GridPlaceholder from "estore/components/templates/GridPlaceholder";
import styles from "./styles";

const { width } = Dimensions.get("window");
import FilterSelection from "estore/components/FilterSelection";
const FeatureProducts = ({ navigation, route }: any) => {
  const [grid, setGrid] = useState(true);
  const { data, loading, error } = useProductByCategoriesQuery({
    variables: { categoryId: route.params.categoryId },
  });
  if (loading) {
    return <GridPlaceholder />;
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
export default React.memo(FeatureProducts);
