import React, { SetStateAction, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useFeatureProductsQuery } from 'estore/graphql/generated';
import Grids from 'estore/containers/ProductsList/Grids';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';
import { Product } from 'estore/graphql/generated';


const FeatureProducts = () => {
    const [products, setProducts]:
        [
            Array<Partial<Product> | null> | undefined,
            React.Dispatch<SetStateAction<Array<Partial<Product> | null> | undefined>>
        ] = useState();
 
    const { data, loading, error } = useFeatureProductsQuery({
        variables: { limit: 20 }
    });
    useEffect(() => {
        if (data?.products?.items) {
            setProducts(data.products.items)
        }
    }, [data?.products])
    if (loading) {
        return <GridPlaceholder />;
    }
    return (
        <React.Fragment>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.listProductName}>Sản phẩm nổi bật</Text>
            </View>
            {products ? (
                <Grids products={products} />
            ): null}
        </React.Fragment>
    );
}

export default FeatureProducts;
