import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Wishlist from 'estore/containers/Wishlist';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { useActiveWishlistQuery } from 'estore/graphql/generated';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import { addToWishlist, removeFromWishlist } from 'estore/redux/slice/wishlistSlice';
type WishlistScreenProps = {
    user: UserSliceType;
};

const WishlistScreen = ({ user }: WishlistScreenProps) => {
   

    return (
        <View style={{ flex: 1 }}>
            <Wishlist/>
        </View>
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = {addToWishlist, removeFromWishlist};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(WishlistScreen));
