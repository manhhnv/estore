import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import Login from 'estore/containers//Credential/Login';
import Settings from 'estore/containers/Settings';
import { login, logout, UserSliceType } from 'estore/redux/slice/userSlice';
import { addToCart, setEmptyCart } from 'estore/redux/slice/cartSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import HomeHeader from 'estore/components/HomeHeader';
import { Order, Address } from 'estore/graphql/generated';
import { changeDefaultAddress } from 'estore/redux/slice/addressSlice';

type SettingScreenProps = {
    user: UserSliceType;
    login: ActionCreatorWithPayload<UserSliceType, string>;
    logout: ActionCreatorWithPayload<any, string>;
    addToCart: ActionCreatorWithPayload<Partial<Order>, string>;
    setEmptyCart: ActionCreatorWithPayload<any, string>;
    changeDefaultAddress: ActionCreatorWithPayload<Partial<Address>, string>;
    address: any;
};

const SettingScreen = ({
    user,
    login,
    logout,
    addToCart,
    setEmptyCart,
    changeDefaultAddress,
    address
}: SettingScreenProps) => {
    if (!user || !user?.token || !user?.me) {
        return <Login login={login} />;
    } else
        return (
            <React.Fragment>
                <HomeHeader />
                <Settings
                    logout={logout}
                    user={user}
                    addToCart={addToCart}
                    setEmptyCart={setEmptyCart}
                    changeDefaultAddress={changeDefaultAddress}
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
    changeDefaultAddress
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(SettingScreen));
