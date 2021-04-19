import React from 'react';
import NoRightIconHeader from 'estore/components/NoRightIconHeader';

const CheckoutScreen = () => {
    return (
        <React.Fragment>
            <NoRightIconHeader name="Thanh toán" />
        </React.Fragment>
    )
}

export default React.memo(CheckoutScreen)
