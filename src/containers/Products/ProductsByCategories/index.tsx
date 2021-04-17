import React, { SetStateAction, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useProductByCategoriesQuery, Product } from 'estore/graphql/generated';
import Grids from 'estore/containers/ProductsList/Grids';
import Lists from 'estore/containers/ProductsList/Lists';
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
    const [products, setProducts]: [
        Array<Partial<Product> | null> | undefined,
        React.Dispatch<
            SetStateAction<Array<Partial<Product> | null> | undefined>
        >
    ] = useState();
    const { data, loading, error, called } = useProductByCategoriesQuery({
        variables: { categoryId: route.params.categoryId }
    });
    useEffect(() => {
        if (data?.products?.items) {
            setProducts(data.products.items);
        }
    }, [data?.products?.items]);
    if (called && loading) {
        return <GridPlaceholder />;
    }
    if (data && data.products && data.products.items) {
        return (
            <View
                style={{ flex: 1, flexDirection: 'column', paddingBottom: 80 }}
            >
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
                            <Grids products={data.products.items} />
                        ) : (
                            <Lists products={data.products.items} />
                        )}
                    </>
                )}
            </View>
        );
    }
    return <View></View>;
};
export default ProductByCategories;
