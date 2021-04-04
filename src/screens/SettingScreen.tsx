import React from 'react';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import Login from 'estore/containers//Credential/Login';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingStackParamList } from 'estore/types';
import Settings from 'estore/containers/Settings';
import { login, logout, UserSliceType } from 'estore/redux/slice/userSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Button, Header, Icon, withBadge } from 'react-native-elements';

const { width } = Dimensions.get('window');

type SettingScreenProps = {
    user: UserSliceType;
    login: ActionCreatorWithPayload<UserSliceType, string>;
    logout: ActionCreatorWithPayload<any, string>;
};

const SettingScreen = ({ user, login, logout }: SettingScreenProps) => {
    if (!user || !user.token || !user.me) {
        return <Login login={login} />;
    }
    const CartIcon = withBadge(2, { status: 'error' })(Icon);
    const MessageIcon = withBadge(4, { status: 'error' })(Icon);
    return (
        <React.Fragment>
            <Header
                placement="right"
                leftComponent={
                    <Icon name="search" type="font-awesome" color="black" />
                }
                leftContainerStyle={{ marginLeft: 0.05 * width }}
                centerComponent={
                    <CartIcon
                        type="font-awesome"
                        name="shopping-cart"
                        color="black"
                    />
                }
                rightComponent={
                    <MessageIcon type="antdesign" name="wechat" color="black" />
                }
                rightContainerStyle={{ marginHorizontal: 0.05 * width }}
                backgroundColor="white"
            />
            <Settings logout={logout} user={user} />
        </React.Fragment>
    );
};
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = { login, logout };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(SettingScreen));
