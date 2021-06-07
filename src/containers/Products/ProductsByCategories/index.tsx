import React, { SetStateAction, useEffect, useState, Dispatch, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Product, useProductByCategoriesLazyQuery } from 'estore/graphql/generated';
import Grids from 'estore/containers/ProductsList/Grids';
import Lists from 'estore/containers/ProductsList/Lists';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';
import ViewOptions from 'estore/components/FilterSelection';
import { RouteProp } from '@react-navigation/core';
import { HomeStackParamList } from 'estore/types';
import FilterSection from 'estore/containers/Products/Filter';
import OrderBySection from 'estore/containers/Products/Orderby';
import { Filter, Sort } from 'estore/graphql/generated';

type ProductByCategoriesProps = {
    route: RouteProp<HomeStackParamList, 'FilterProduct'>;
};

const ProductByCategories = ({ route }: ProductByCategoriesProps) => {

    const [grid, setGrid] = useState(true);
    const [products, setProducts]: [
        Array<Partial<Product> | null> | undefined,
        Dispatch<
            SetStateAction<Array<Partial<Product> | null> | undefined>
        >
    ] = useState();
    const [filter, setFilter]: [Filter, Dispatch<SetStateAction<Filter>>] = useState({
        limit: 30,
        currentPage: 1,
        categoryId: route.params.categoryId
    } as Filter);
    const [orderby, setOrderby]: [Sort, Dispatch<SetStateAction<Sort>>] = useState({})

    const [
        executeGQL,
        {
            data,
            loading,
            called,
            error
        }
    ] = useProductByCategoriesLazyQuery();
    const getProductsByCategoryId = useCallback(() => {
        executeGQL({ variables: {filter: filter, sort: orderby} })
    }, [filter, orderby])
    useEffect(() => {
        getProductsByCategoryId();
    }, [filter, orderby])
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
                    <View style={styles.subHeaderContainer}>
                            <FilterSection
                                isSearching={false}
                                categoryId={route.params.categoryId}
                                filter={filter}
                                setFilter={setFilter}
                            />
                            <OrderBySection orderby={orderby} setOrderby={setOrderby} />
                            <ViewOptions grid={grid} setGrid={setGrid} />
                        </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center'}}>Không tìm thấy kết quả phù hợp</Text>
                    </View>
                    </>
                ) : (
                    <>
                        <View style={styles.subHeaderContainer}>
                            <FilterSection
                                isSearching={false}
                                categoryId={route.params.categoryId}
                                filter={filter}
                                setFilter={setFilter}
                            />
                            <OrderBySection orderby={orderby} setOrderby={setOrderby} />
                            <ViewOptions grid={grid} setGrid={setGrid} />
                        </View>
                        {grid ? (
                            <Grids products={products} />
                        ) : (
                            <Lists products={products} />
                        )}
                    </>
                )}
            </View>
        );
    }
    return <View></View>;
};
export default ProductByCategories;
