import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import Login from 'estore/containers//Credential/Login';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingStackParamList } from 'estore/types';

type SettingScreenProps = {
    user: UserSliceType;
}

const SettingScreen = ({ user }: SettingScreenProps) => {
    if (!user || !user.token || !user.me) {
        return (
            <Login/>
            // <Login />
        )
    }
    return <Login/>
}
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(React.memo(SettingScreen));