import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import useShippingCalculation from 'estore/hooks/useShippingCalculation';
import { useSelector } from 'react-redux';
import { RootState } from 'estore/redux/slice';
import { Delivery_Options } from 'estore/graphql/generated';
import { CheckBox, Button } from 'react-native-elements';
import OverlayLoading from 'estore/components/OverlayLoading';

const Shipping = () => {
    const [deliverOption, setDeliverOption] = useState(Delivery_Options.None);
    const cart = useSelector((state: RootState) => state.cart);
    if (Object.keys(cart).length !== 0) {
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
                {result.loading ? <OverlayLoading /> : null}
            </React.Fragment>
        );
    }
    return <View></View>;
};

export default React.memo(Shipping);
