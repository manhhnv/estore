import React, {useEffect} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useActiveWishlistQuery } from 'estore/graphql/generated';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { HomeStackParamList } from 'estore/types';
import Grid from 'estore/components/ProductsList/Grid';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { WishlistSliceType } from 'estore/redux/slice/wishlistSlice';
import { RootState } from 'estore/redux/slice/index';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type WishlistProps = {
    user: UserSliceType;
    getWishlist: ActionCreatorWithPayload<WishlistSliceType, string>;
};


const Wishlist = ({ user, getWishlist}: WishlistProps) => {
    const { data, loading, error } = useActiveWishlistQuery();
     console.log(getWishlist)
    useEffect(() => {
        if (data && data?.activeWishlist) {
            console.log(data)
        }
    }, [data]);

    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    if (loading) {
        return <GridPlaceholder />;
    }
    if (data && data?.activeWishlist) {
        
        return (
            <View
                style={{ flex: 1, flexDirection: 'column', alignContent: "center", alignItems: "center"}}
            >
                {/* <Grid products={data.products.items} /> */}
                <Text>this is wishlist</Text>
            </View>
        );
    }
    return <View style={{ flex: 1, flexDirection: 'column', alignContent: "center", alignItems: "center", backgroundColor: "red" }}></View>;
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
        wishlist: state.wishlist
    };
};
const mapDispatchToProps = { };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Wishlist));
