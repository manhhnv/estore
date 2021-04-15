import React from 'react';
import { View, Text } from 'react-native';
import { useFeatureProductsQuery } from 'estore/graphql/generated';
import Grids from 'estore/containers/ProductsList/Grids';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';

const FeatureProducts = () => {
 
    const { data, loading, error } = useFeatureProductsQuery({
        variables: { limit: 20 }
    });
    if (loading) {
        return <GridPlaceholder />;
    }
    if (data && data.products && data.products.items) {
        return (
            <React.Fragment>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={styles.listProductName}>Sản phẩm nổi bật</Text>
                </View>
                <Grids products={data.products.items} />
            </React.Fragment>
        );
    }
    return <View></View>;
};


export default FeatureProducts;
