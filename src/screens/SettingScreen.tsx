import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import Login from 'estore/containers//Credential/Login';
import Settings from 'estore/containers/Settings';
import { login, logout, UserSliceType } from 'estore/redux/slice/userSlice';
import { resetAddress } from 'estore/redux/slice/addressSlice';
import { addToCart, setEmptyCart } from 'estore/redux/slice/cartSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import LeftTextHeader from 'estore/components/LeftTextHeader';
import { Order, Address } from 'estore/graphql/generated';
import { changeDefaultAddress } from 'estore/redux/slice/addressSlice';

type SettingScreenProps = {
    user: UserSliceType;
    login: ActionCreatorWithPayload<UserSliceType, string>;
    logout: ActionCreatorWithPayload<any, string>;
    addToCart: ActionCreatorWithPayload<Partial<Order>, string>;
    setEmptyCart: ActionCreatorWithPayload<any, string>;
    changeDefaultAddress: ActionCreatorWithPayload<Partial<Address>, string>;
    resetAddress: ActionCreatorWithPayload<any, string>;
    address: any;
};

const SettingScreen = ({
    user,
    login,
    logout,
    addToCart,
    setEmptyCart,
    changeDefaultAddress,
    address,
    resetAddress
}: SettingScreenProps) => {
    if (!user || !user?.token || !user?.me) {
        return <Login login={login} />;
    } else
        return (
            <React.Fragment>
                <LeftTextHeader leftText="Cài đặt"/>
                <Settings
                    logout={logout}
                    user={user}
                    addToCart={addToCart}
                    setEmptyCart={setEmptyCart}
                    changeDefaultAddress={changeDefaultAddress}
                    resetAddress={resetAddress}
                />
            </React.Fragment>
        );
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
        address: state.address
    };
};
const mapDispatchToProps = {
    login,
    logout,
    addToCart,
    setEmptyCart,
    changeDefaultAddress,
    resetAddress
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(SettingScreen));
