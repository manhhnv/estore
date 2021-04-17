import React from 'react';
import { View, Text } from 'react-native';
import ListAddress from 'estore/containers/UserAddress/ListAddress';
import NoRightIconHeader from 'estore/components/NoRightIconHeader';

const UserAddressScreen = () => {
    return (
        <React.Fragment>
            <NoRightIconHeader name="Địa chỉ" />
            <ListAddress />
        </React.Fragment>
    );
};
export default React.memo(UserAddressScreen);
