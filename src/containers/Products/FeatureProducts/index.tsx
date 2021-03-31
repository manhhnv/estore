import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useFeatureProductsQuery } from 'estore/graphql/generated';
import Grid from 'estore/components/ProductsList/Grid';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles'

const { width } = Dimensions.get('window');

const FeatureProducts = () => {
    const { data, loading, error } = useFeatureProductsQuery({ variables: { limit: 20 } });
    if (loading) {
        return (
            <GridPlaceholder />
        )
    }
    if (data && data.products && data.products.total && data.products.items) {
        return (
            <React.Fragment>
                <View style={{ flexDirection: "column", flex: 1 }}>
                    <Text style={styles.listProductName}>Feature Products</Text>
                </View>
                <Grid products={data.products.items} />
            </React.Fragment>
        )
    }
    return (
        <View></View>
    )
}
export default React.memo(FeatureProducts);