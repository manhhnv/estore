import React from 'react';
import { View, Text } from 'react-native';
import { useFeatureProductsQuery } from 'estore/graphql/generated';
import Grid from 'estore/components/ProductsList/Grid';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import wishlistSlice, { addToWishlist, removeFromWishlist, WishlistSliceType } from 'estore/redux/slice/wishlistSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type WishlistAction = {
    wishlist: WishlistSliceType,
    addToWishlist: ActionCreatorWithPayload<any, string>;
};
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
                <Grid products={data.products.items} />
            </React.Fragment>
        );
    }
    return <View></View>;
};


export default FeatureProducts;
