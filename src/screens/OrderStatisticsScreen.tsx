import React, { useEffect } from 'react';
import { View } from 'react-native';
import FeatureHeader from 'estore/components/FeatureHeader';
import OrderStatistics from 'estore/containers/OrderStatistics';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { setEmptyCart } from 'estore/redux/slice/cartSlice';

type OrderStatisticsScreenProps = {
    setEmptyCart: ActionCreatorWithPayload<any, string>
}

const OrderStatisticsScreen = ({ setEmptyCart }: OrderStatisticsScreenProps) => {
    return (
        <React.Fragment>
            <FeatureHeader name="Đơn mua" />
            <OrderStatistics />
        </React.Fragment>
    )
}

const mapDispatchToProps = { setEmptyCart }

export default connect(null, mapDispatchToProps)(React.memo(OrderStatisticsScreen));
