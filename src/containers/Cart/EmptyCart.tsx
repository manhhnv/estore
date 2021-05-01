import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { emptyCart } from './styles';

const EmptyCart = React.memo(() => {
    return (
        <View style={emptyCart.container}>
            <Image
                source={require('estore/assets/images/emptyCart.png')}
                style={emptyCart.logo}
            />
            <Text style={emptyCart.emptyCartText}>Giỏ hàng trống</Text>
        </View>
    );
});

export { EmptyCart };
