import React from 'react';
import { View } from 'react-native';
import FeatureHeader from 'estore/components/FeatureHeader';

const OrderStatisticsScreen = () => {
    return (
        <React.Fragment>
            <FeatureHeader name="Đơn mua" />
        </React.Fragment>
    )
}

export default React.memo(OrderStatisticsScreen);
