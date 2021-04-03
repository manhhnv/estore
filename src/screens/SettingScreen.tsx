import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import Login from 'estore/containers//Credential/Login';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingStackParamList } from 'estore/types';
import Settings from 'estore/containers/Settings';
import { login, logout, UserSliceType } from 'estore/redux/slice/userSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type SettingScreenProps = {
    user: UserSliceType;
    login: ActionCreatorWithPayload<UserSliceType, string>;
    logout: ActionCreatorWithPayload<any, string>;
};

const SettingScreen = ({ user, login, logout }: SettingScreenProps) => {
    if (!user || !user.token || !user.me) {
        return (
            <Login login={login} />
        );
    }
    return (
        <Settings logout={logout} />
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = { login, logout }
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SettingScreen));
