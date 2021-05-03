import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
    Order,
    OrderLine,
    useRemoveFromCartMutation,
    useAddToCartMutation,
    ProductOption
} from 'estore/graphql/generated';
import { RootState } from 'estore/redux/slice';
import React, { useEffect } from 'react';
import { FlatList, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { addToCart } from 'estore/redux/slice/cartSlice';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';
import { EmptyCart } from './EmptyCart';
import OverlayLoading from 'estore/components/OverlayLoading';
import { CheckoutButton } from './CheckoutButton';
import { CartItem } from './CartItem';

type CartProps = {
    cart?: Partial<Order>;
    addToCart: ActionCreatorWithPayload<Partial<Order>, string>;
};

const Cart = ({ cart, addToCart }: CartProps) => {
    const [
        removeOrderLine,
        { called, loading, data, error }
    ] = useRemoveFromCartMutation();
    const removeOrderLineHandle = (lineId: string) => {
        removeOrderLine({ variables: { lineId: lineId } });
    };
    const [
        executeAddToCartGQL,
        {
            called: addToCartCalled,
            loading: addToCartLoading,
            data: addToCartData,
            error: addToCartError
        }
    ] = useAddToCartMutation();
    const addItemToCartHandle = (
        productId: string,
        quantity: number,
        config?: Array<ProductOption>
    ) => {
        executeAddToCartGQL({
            variables: {
                productId: productId,
                quantity: quantity,
                config: config ? config : null
            }
        });
    };
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const removeOrderLineSuccess = () => {
        ToastAndroid.show('Đã xóa mục này khỏi giỏ hàng', ToastAndroid.SHORT);
    };
    const removeOrderLineFailed = () => {
        ToastAndroid.show('Có lỗi xảy ra', ToastAndroid.SHORT);
    };
    const renderItem = ({ item }: { item: OrderLine }) => {
        return (
            <CartItem
                item={item}
                removeOrderLineHandle={removeOrderLineHandle}
                navigation={navigation}
                addItemToCartHandle={addItemToCartHandle}
            />
        );
    };
    useEffect(() => {
        if (error && error.message) {
            removeOrderLineFailed();
        }
    }, [error]);
    useEffect(() => {
        if (data && data.removeFromCart) {
            const order = data.removeFromCart as Partial<Order>;
            addToCart(order);
            removeOrderLineSuccess();
        }
    }, [data]);
    useEffect(() => {
        if (addToCartData && addToCartData.addToCart) {
            const order = addToCartData.addToCart as Partial<Order>;
            addToCart(order);
        }
    }, [addToCartData]);
    useEffect(() => {
        if (addToCartError && addToCartError.message) {
            removeOrderLineFailed();
        }
    }, [addToCartError]);
    if (cart && cart.lines && cart.lines.length > 0) {
        return (
            <React.Fragment>
                <FlatList
                    data={cart.lines}
                    renderItem={renderItem}
                    maxToRenderPerBatch={10}
                    removeClippedSubviews={true}
                />
                <CheckoutButton cart={cart} navigation={navigation} />
                {loading || addToCartLoading ? <OverlayLoading /> : null}
            </React.Fragment>
        );
    }
    return <EmptyCart />;
};

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    };
};
const mapDispatchToProps = { addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cart));
