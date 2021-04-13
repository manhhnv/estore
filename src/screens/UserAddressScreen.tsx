import React from 'react';
import { View, Text } from 'react-native';
import FeatureHeader from 'estore/components/FeatureHeader';

const UserAddressScreen = () => {
    return (
        <React.Fragment>
            <FeatureHeader name="Địa chỉ"/>
        </React.Fragment>
    )
}
export default React.memo(UserAddressScreen);