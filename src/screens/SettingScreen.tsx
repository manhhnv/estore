import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import Login from 'estore/containers//Credential/Login';
import Settings from 'estore/containers/Settings';
import { login, logout, UserSliceType } from 'estore/redux/slice/userSlice';
import { addToCart, setEmptyCart } from 'estore/redux/slice/cartSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import HomeHeader from 'estore/components/HomeHeader';
import { Order } from 'estore/graphql/generated';

type SettingScreenProps = {
    user: UserSliceType;
    login: ActionCreatorWithPayload<UserSliceType, string>;
    logout: ActionCreatorWithPayload<any, string>;
    addToCart: ActionCreatorWithPayload<Partial<Order>, string>;
    setEmptyCart: ActionCreatorWithPayload<any, string>;
};

const SettingScreen = ({
    user,
    login,
    logout,
    addToCart,
    setEmptyCart
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
                />
            </React.Fragment>
        );
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = { login, logout, addToCart, setEmptyCart };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(SettingScreen));
