import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useProductByCategoriesQuery } from "estore/graphql/generated";
import Grid from "estore/components/ProductsList/Grid";
import GridPlaceholder from "estore/components/templates/GridPlaceholder";
import styles from "./styles";

const { width } = Dimensions.get("window");
import FilterSelection from "estore/components/FilterSelection";
const FeatureProducts = ({ navigation, route }: any) => {
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
             <FilterSelection />
            <Grid products={data.products.items} />
          </>
        )}
      </React.Fragment>
    );
  }
  return <View></View>;
};
export default React.memo(FeatureProducts);
