import React from 'react';
import NoRightIconHeader from 'estore/components/NoRightIconHeader';
import { ProgressBar, ProgressItem } from 'estore/components/ProgressBar';
import AddAddress from 'estore/containers/UserAddress/AddAddress';

const AddAddressScreen = () => {
    return (
        <React.Fragment>
            <NoRightIconHeader name="Thêm địa chỉ mới" />
            <AddAddress />
        </React.Fragment>
    );
};
export default AddAddressScreen;
