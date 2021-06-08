import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Wishlist from 'estore/containers/Wishlist';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { useActiveWishlistQuery } from 'estore/graphql/generated';
import { addToWishlist } from 'estore/redux/slice/wishlistSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import LeftTextHeader from 'estore/components/LeftTextHeader';

type WishlistScreenProps = {
    user: UserSliceType;
    addToWishlist: ActionCreatorWithPayload<any, string>;
};

const WishlistScreen = ({ user, addToWishlist }: WishlistScreenProps) => {
    const { called, data, loading, error } = useActiveWishlistQuery();

    useEffect(() => {
        if (data?.activeWishlist) {
            const wishlist = data.activeWishlist;
            addToWishlist(wishlist);
        }
    }, [data]);

    if (loading) {
        return (
            <React.Fragment>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                >
                    <ActivityIndicator color="#ee4d2d" size="large" />
                </View>
            </React.Fragment>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <LeftTextHeader leftText="Yêu thích" />
            <Wishlist />
        </View>
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = { addToWishlist };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(WishlistScreen));
