import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useProductByCategoriesQuery } from "estore/graphql/generated";
import Grid from "estore/components/ProductsList/Grid";
import GridPlaceholder from "estore/components/templates/GridPlaceholder";
import styles from "./styles";

const { width } = Dimensions.get("window");

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
              {data.products.total} products by {route.params.categoryId}
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.listProductName}>
              {data.products.total} products by {route.params.categoryId}
            </Text>
            <Grid products={data.products.items} />
          </>
        )}
      </React.Fragment>
    );
  }
  return <View></View>;
};
export default React.memo(FeatureProducts);
