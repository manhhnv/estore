import React from 'react';
import NoRightIconHeader from 'estore/components/NoRightIconHeader';
import AddAddress from 'estore/containers/UserAddress/AddAddress';

const AddAddressScreen: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <NoRightIconHeader name="Thêm địa chỉ mới" />
            <AddAddress />
        </React.Fragment>
    );
};
export default AddAddressScreen;
