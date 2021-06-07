import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import SearchingHeader from '../Header';
import { connect } from 'react-redux';
import { addSearchHistory } from 'estore/redux/slice/historySlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Product, useSearchProductsQuery } from 'estore/graphql/generated';
import Grids from 'estore/containers/ProductsList/Grids';
import { Image, Button, Icon } from 'react-native-elements';
import styles from './styles';

type SearchingResultProps = {
    name: string;
    addSearchHistory?: ActionCreatorWithPayload<string, string>;
};

const SearchingResult = ({ name }: SearchingResultProps) => {
    const { data, loading, error } = useSearchProductsQuery({
        variables: { name: name }
    });
    const [products, setProducts] = useState(data?.products?.items);
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
                    <View
                        style={{ paddingBottom: 200, backgroundColor: 'white' }}
                    >
                        <Grids products={products as Array<Partial<Product>>} />
                    </View>
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
