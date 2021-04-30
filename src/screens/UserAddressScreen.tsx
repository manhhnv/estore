import React from 'react';
import ListAddress from 'estore/containers/UserAddress/ListAddress';
import NoRightIconHeader from 'estore/components/NoRightIconHeader';

const UserAddressScreen = () => {
    return (
        <React.Fragment>
            <NoRightIconHeader name="Địa chỉ của tôi" />
            <ListAddress />
        </React.Fragment>
    );
};
export default React.memo(UserAddressScreen);
