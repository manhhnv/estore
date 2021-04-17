import React from 'react';
import FeatureHeader from 'estore/components/FeatureHeader';
import Cart from 'estore/containers/Cart';
import { View } from 'react-native';

const ViewCartScreen = () => {
    return (
        <React.Fragment>
            <FeatureHeader name="Giỏ hàng" />
            <View style={{ flex: 1 }}>
                <Cart />
            </View>
        </React.Fragment>
    );
};
export default ViewCartScreen;
