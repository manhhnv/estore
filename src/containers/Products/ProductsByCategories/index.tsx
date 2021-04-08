import React, { SetStateAction, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Product, useProductByCategoriesQuery } from 'estore/graphql/generated';
import Grid from 'estore/components/ProductsList/Grid';
import List from 'estore/components/ProductsList/List';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';
import FilterSelection from 'estore/components/FilterSelection';
import { RouteProp } from '@react-navigation/core';
import { HomeStackParamList } from 'estore/types';

type ProductByCategoriesProps = {
    route: RouteProp<HomeStackParamList, 'FilterProduct'>;
};

const ProductByCategories = ({ route }: ProductByCategoriesProps) => {
    const [grid, setGrid] = useState(true);
    const [products, setProducts]:
        [
            Array<Partial<Product> | null> | undefined,
            React.Dispatch<SetStateAction<Array<Partial<Product> | null> | undefined>>
        ] = useState();
    const { data, loading, error, called } = useProductByCategoriesQuery({
        variables: { categoryId: route.params.categoryId }
    });
    useEffect(() => {
        if (data?.products?.items) {
            setProducts(data.products.items)
        }
    }, [data?.products?.items])
    if (called && loading) {
        return <GridPlaceholder />;
    }
    return (
        <View
            style={{ flex: 1, flexDirection: 'column', paddingBottom: 80 }}
        >
            {data?.products?.total === 0 ? (
                <>
                    <Text style={styles.listProductName}>
                        No Product found in this category
                    </Text>
                </>
            ) : (
                <>
                    <FilterSelection grid={grid} setGrid={setGrid} />
                    {grid && products ? (
                        <Grid products={products} />
                    ) : null}
                    {!grid && products ? (
                        <List products={products} />
                    ) : null}
                </>
            )}
        </View>
    );
    return <View></View>;
};
export default ProductByCategories;
