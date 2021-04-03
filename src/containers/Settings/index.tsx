import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

type SettingsProps = {
    logout: ActionCreatorWithPayload<UserSliceType, string>;
}

const Settings = ({ logout }: SettingsProps) => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{ marginTop: 100 }}>ABC</Text>
            <Button title='Đăng xuất' onPress={() => {
                logout({token: undefined, me: undefined});
                navigation.navigate("Home")

            }}></Button>
        </View>
    )
}
export default Settings;
