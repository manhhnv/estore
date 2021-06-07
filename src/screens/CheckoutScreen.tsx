import React from 'react';
import NoRightIconHeader from 'estore/components/NoRightIconHeader';
import useShippingCalculation from 'estore/hooks/useShippingCalculation';
import { Delivery_Options } from 'estore/graphql/generated';
import Checkout from 'estore/containers/Checkout';

const CheckoutScreen = () => {
    // const testHook = useShippingCalculation({
    //     weight: 1000,
    //     transport: 'road',
    //     deliver_option: Delivery_Options.None,
    //     value: 3000000
    // })
    // React.useEffect(() => {
    //     console.log(testHook)
    // }, [testHook])
    return (
        <React.Fragment>
            <NoRightIconHeader name="Thanh toán" />
            <Checkout />
        </React.Fragment>
    );
};

export default React.memo(CheckoutScreen);
