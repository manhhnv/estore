import React from 'react';
import CartPreview from './CartPreview';
import Shipping from './Shipping';
import { Delivery_Options } from 'estore/graphql/generated';
import { View } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

const Checkout = () => {
    return (
        <View style={{ flex: 1 }}>
            <CartPreview />
            <Shipping />
        </View>
    );
};

export default React.memo(Checkout);
