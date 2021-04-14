import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useActiveWishlistQuery, useMeQuery } from 'estore/graphql/generated';
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
import { logout } from 'estore/redux/slice/userSlice';
import { Button } from 'react-native-elements';

type WishlistProps = {
    user: UserSliceType;
    logout: ActionCreatorWithPayload<any, string>;
};

const Wishlist = ({ user, logout }: WishlistProps) => {
    const { called, data, loading, error } = useActiveWishlistQuery();
   
    useEffect(() => {
        if (data?.activeWishlist) {
            const wishlist = data.activeWishlist;
        }
    }, [data])

    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

    
    if (loading) {
        return <GridPlaceholder />;
    }
    if (data) {

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* <Grid products={data.products.items} /> */}
                <Text>this is wishlist</Text>
            </View>
        );
    }
    return (
        <View>
            <Text>ABC</Text>
            <Button title="UPDATE" onPress={() => logout({})} />
        </View>
    )
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
        wishlist: state.wishlist
    };
};
const mapDispatchToProps = { logout };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Wishlist));
