import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useActiveWishlistQuery } from 'estore/graphql/generated';
import GridPlaceholder from 'estore/components/templates/GridPlaceholder';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { HomeStackParamList } from 'estore/types';
import Grid from 'estore/components/ProductsList/Grid';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import Login from 'estore/containers//Credential/Login';
import { RootState } from 'estore/redux/slice/index';
import { connect } from 'react-redux';
type WishlistProps = {
    user: UserSliceType;
};

const Wishlist = ({ user}: WishlistProps) => {
    const { data, loading, error } = useActiveWishlistQuery();
    console.log(data?.activeWishlist);
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
        user: state.user
    };
};
const mapDispatchToProps = { };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Wishlist));
