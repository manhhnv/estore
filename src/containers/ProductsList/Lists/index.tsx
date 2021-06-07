import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { Product } from 'estore/graphql/generated';
import { useAddToWishlistMutation } from 'estore/graphql/generated';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import { addToWishlist } from 'estore/redux/slice/wishlistSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import List from 'estore/components/ProductsList/List';
type GridProps = {
    products: Array<Partial<Product> | null> | undefined;
    addToWishlist: ActionCreatorWithPayload<any, string>;
};

const Lists = ({ products, addToWishlist }: GridProps) => {
    const [
        addProducttoWishlist,
        { called, data, loading, error }
    ] = useAddToWishlistMutation();

    const addProductHandle = (productId: string) => {
        addProducttoWishlist({ variables: { productId: productId } });
    };
    const addProductSuccess = () => {
        ToastAndroid.show('Đã thêm vào mục ưa thích', ToastAndroid.SHORT);
    };
    const addProductFailed = () => {
        ToastAndroid.show('Có lỗi xảy ra', ToastAndroid.SHORT);
    };

    useEffect(() => {
        if (error && error.message) {
            addProductFailed();
        }
    }, [error]);
    useEffect(() => {
        if (data && data.addToWishlist) {
            const wishlist = data.addToWishlist;
            addToWishlist(wishlist);
            addProductSuccess();
        }
    }, [data]);
    return <List products={products} addProductHandle={addProductHandle} />;
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
        wishlist: state.wishlist
    };
};
const mapDispatchToProps = { addToWishlist };
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Lists));
