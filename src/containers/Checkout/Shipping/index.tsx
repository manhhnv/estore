import React, { useEffect, useMemo, useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import styles from './styles';
import useShippingCalculation from 'estore/hooks/useShippingCalculation';
import { RootState } from 'estore/redux/slice';
import { Address, Delivery_Options, Order } from 'estore/graphql/generated';
import { CheckBox, Button } from 'react-native-elements';
import OverlayLoading from 'estore/components/OverlayLoading';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTransitionOrderToStateMutation, Order_State, useCalculateShippingFeeMutation } from 'estore/graphql/generated';
import { connect  } from 'react-redux';
import { setEmptyCart } from 'estore/redux/slice/cartSlice';
import { RootStackParamList } from 'estore/types';


type ShippingProps = {
    setEmptyCart?: ActionCreatorWithPayload<any, string>;
    cart?: Partial<Order>;
    address?: Partial<Address>
}

const Shipping = ({ setEmptyCart, cart, address }: ShippingProps) => {


    if (cart && Object.keys(cart).length !== 0) {
        const [deliverOption, setDeliverOption] = useState(Delivery_Options.None);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const showErrorToast = () => {
        ToastAndroid.show("Có lỗi xảy ra, thử lại sau.", ToastAndroid.SHORT);
    }

    const [
        executeGQL,
        {
            data,
            loading,
            error
        }
    ] = useTransitionOrderToStateMutation();

    const transitionHandle = (fee: number) => {
        executeGQL({ variables: { state: Order_State.Waiting, orderId: String(cart?.id), fee: fee } })
    }

    useEffect(() => {
        if (data?.transitionOrderToState?.id) {
            navigation.navigate("orderStatistics", { success: true })
            setEmptyCart ? setEmptyCart(null) :  null
        }
    }, [data]);
    useEffect(() => {
        if (error) {
            showErrorToast()
        }
    }, [error])

    useEffect(() => {

    })
        let totalWeight = 0;
        let totalValue = 0;
        if (cart.lines && cart.lines.length > 0) {
            cart.lines.map((item) => {
                if (item && item.weight) {
                    totalWeight += item.weight;
                    totalValue += item.subTotal;
                }
            });
        }
        const transport = 'road';
        const result = useShippingCalculation({
            weight: totalWeight,
            value: totalValue,
            transport: transport,
            deliver_option: deliverOption
        });
        let bottomButtons = null;
        if (result.data?.calculateShippingFee?.fee && cart?.totalPrice) {
            bottomButtons = (
                <View>
                    <Button
                        title={`Phí vận chuyển: ${result.data?.calculateShippingFee?.fee
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            .concat('đ')}`}
                        buttonStyle={{
                            backgroundColor: '#00bfa5',
                            borderRadius: 0
                        }}
                        style={{ borderRadius: 0 }}
                        containerStyle={{ borderRadius: 0 }}
                        disabled={result.error ? true : false}
                    />
                    <Button
                        title={`Tổng thanh toán: ${(
                            cart?.totalPrice +
                            result.data?.calculateShippingFee?.fee
                        )
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            .concat('đ')}`}
                        buttonStyle={{
                            backgroundColor: '#ee4d2d',
                            borderRadius: 0
                        }}
                        style={{ borderRadius: 0 }}
                        containerStyle={{ borderRadius: 0 }}
                        disabled={result.error ? true : false}
                        onPress={() => {
                            if (result.data?.calculateShippingFee?.fee) {
                                transitionHandle(Number(result.data?.calculateShippingFee?.fee))
                            }
                        }}
                    />
                </View>
            );
        }
        return (
            <React.Fragment>
                <View style={{ flexDirection: 'column', backgroundColor: "white" }}>
                    <CheckBox
                        checked={deliverOption === Delivery_Options.None}
                        checkedColor="#ee4d2d"
                        title="Vận chuyển thông thường"
                        containerStyle={styles.deliveryOptions}
                        onPress={() => {
                            setDeliverOption(Delivery_Options.None);
                        }}
                    />
                    <CheckBox
                        checked={deliverOption === Delivery_Options.Xteam}
                        checkedColor="#ee4d2d"
                        title="Vận chuyển nhanh"
                        containerStyle={styles.deliveryOptions}
                        onPress={() => {
                            setDeliverOption(Delivery_Options.Xteam);
                        }}
                    />
                </View>
                {bottomButtons}
                {result.loading || loading ? <OverlayLoading /> : null}
            </React.Fragment>
        );
    }
    return <View></View>;
};

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart,
        address: state.address
    }
}

const mapDispatchToProps = { setEmptyCart }

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Shipping));
