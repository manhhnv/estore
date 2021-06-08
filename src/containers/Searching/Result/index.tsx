import React, { useEffect, useState, Dispatch, SetStateAction, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SearchingHeader from '../Header';
import { connect } from 'react-redux';
import { addSearchHistory } from 'estore/redux/slice/historySlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Product, useSearchProductsQuery, useSearchProductsLazyQuery } from 'estore/graphql/generated';
import Grids from 'estore/containers/ProductsList/Grids';
import { Image, Button, Icon } from 'react-native-elements';
import styles from './styles';
import FilterSection from 'estore/containers/Products/Filter';
import OrderBySection from 'estore/containers/Products/Orderby';
import ViewOptions from 'estore/components/FilterSelection';
import { Filter, Sort } from 'estore/graphql/generated';

type SearchingResultProps = {
    name: string;
    addSearchHistory?: ActionCreatorWithPayload<string, string>;
};

const SearchingResult = ({ name }: SearchingResultProps) => {
    // const { data, loading, error } = useSearchProductsQuery({
    //     variables: { name: name }
    // });
    const [
        executeGQL,
        {
            data,
            loading,
            error
        }
    ] = useSearchProductsLazyQuery();
    const [products, setProducts] = useState(data?.products?.items);
    const [grid, setGrid] = useState(true);
    const [filter, setFilter]: [Filter, Dispatch<SetStateAction<Filter>>] = useState({
        limit: 30,
        currentPage: 1,
    } as Filter);
    const [orderby, setOrderby]: [Sort, Dispatch<SetStateAction<Sort>>] = useState({})

    const searchProducts = useCallback(() => {
        executeGQL({
            variables: {
                name: name,
                filter: filter,
                sort: orderby
            }
        })
    }, [filter, orderby, name])

    useEffect(() => {
        searchProducts();
    }, [filter, orderby, name])

    useEffect(() => {
        if (data?.products && data.products?.items) {
            setProducts(data.products.items);
        }
    }, [data]);
    return (
        <React.Fragment>
            <View>
                <SearchingHeader
                    currentKeyWord={name}
                    rightComponent={
                        <Button
                            buttonStyle={styles.goBackButton}
                            icon={
                                <Icon
                                    name="filter"
                                    type="antdesign"
                                    color="#ee4d2d"
                                />
                            }
                        />
                    }
                />
                {data?.products?.items && data.products.total ? (
                    <React.Fragment>
                        <View style={styles.subHeaderContainer}>
                            <FilterSection
                                isSearching={true}
                                filter={filter}
                                setFilter={setFilter}
                            />
                            <OrderBySection orderby={orderby} setOrderby={setOrderby} />
                            <ViewOptions grid={grid} setGrid={setGrid} />
                        </View>
                        <View
                            style={{ paddingBottom: 200, backgroundColor: 'white' }}
                        >
                            <Grids products={products as Array<Partial<Product>>} />
                        </View>
                    </React.Fragment>
                ) : null}
            </View>
            {data?.products?.items?.length == 0 ? (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('estore/assets/images/notfound.webp')}
                        style={{ width: 200, height: 190 }}
                    />
                </View>
            ) : null}
            {loading ? (
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ActivityIndicator size="large" color="#ee4d2d" />
                </View>
            ) : null}
        </React.Fragment>
    );
};

const mapDispatchToProps = { addSearchHistory };

export default connect(null, mapDispatchToProps)(React.memo(SearchingResult));
