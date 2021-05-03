import React from 'react';
import { Button } from 'react-native-elements';
import { Order } from 'estore/graphql/generated';
import { RootStackParamList } from 'estore/types';
import { NavigationProp } from '@react-navigation/core';

type CheckoutButtonProps = {
    cart: Partial<Order>;
    navigation: NavigationProp<RootStackParamList>;
};

const CheckoutButton = ({ cart, navigation }: CheckoutButtonProps) => {
    return (
        <Button
            title={`MUA HÀNG ( ${cart?.totalPrice
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ )`}
            titleStyle={{ letterSpacing: 1 }}
            buttonStyle={{
                backgroundColor: '#ee4d2d',
                borderRadius: 0
            }}
            style={{ borderRadius: 0 }}
            containerStyle={{ borderRadius: 0 }}
            onPress={() => {
                navigation.navigate('checkout');
            }}
        />
    );
};

export { CheckoutButton };
