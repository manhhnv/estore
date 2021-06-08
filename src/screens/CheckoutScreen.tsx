import React from 'react';
import NoRightIconHeader from 'estore/components/NoRightIconHeader';
import useShippingCalculation from 'estore/hooks/useShippingCalculation';
import { Delivery_Options } from 'estore/graphql/generated';
import Checkout from 'estore/containers/Checkout';

const CheckoutScreen = () => {
    return (
        <React.Fragment>
            <NoRightIconHeader name="Thanh toán" />
            <Checkout />
        </React.Fragment>
    );
};

export default React.memo(CheckoutScreen);
