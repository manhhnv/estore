import React from 'react';
import CartPreview from './CartPreview';
import Shipping from './Shipping';
import { Text, View, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice';
import { Address, Order } from 'estore/graphql/generated';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type CheckoutProps = {
    address?: Partial<Address>;
    setEmptyCart?: ActionCreatorWithPayload<any, string>;
    cart?: Partial<Order>
};

const Checkout = ({ address, setEmptyCart, cart }: CheckoutProps) => {
    const showToast = () => {
        ToastAndroid.showWithGravity(
            'Bạn cần chỉ định địa chỉ mặc định trong mục cài đặt',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    };
    React.useEffect(() => {
        if (!address || (address && Object.keys(address).length == 0)) {
            showToast();
        }
    }, [address]);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <CartPreview />
                {address && Object.keys(address).length > 0 && cart && Object.keys(cart).length > 0 ? (
                    <View
                        style={{
                            backgroundColor: 'white',
                            marginTop: 12,
                            padding: 15
                        }}
                    >
                        <Text
                            style={{
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                fontFamily: 'castoro'
                            }}
                        >
                            Thông tin giao hàng
                        </Text>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Người gửi:
                            </Text>
                            <Text>Ebuy-Shop</Text>
                            <Text>0123456789</Text>
                            <Text>Huyện Hiệp Hòa, Tỉnh Bắc Giang</Text>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Người nhận:
                            </Text>
                            <Text>
                                {address.firstName + ' ' + address?.lastName}
                            </Text>
                            <Text>{address.phoneNumber}</Text>
                            {address.streetLine1 && (
                                <Text>{address.streetLine1}</Text>
                            )}
                            <Text>
                                {address?.ward +
                                    ', ' +
                                    address.state +
                                    ', ' +
                                    address.city}
                            </Text>
                        </View>
                    </View>
                ) : null}
            </ScrollView>
            {address  &&  Object.keys(address).length > 0 && <Shipping/>}
        </View>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        address: state.address,
        cart: state.cart
    };
};

export default connect(mapStateToProps, null)(React.memo(Checkout));
