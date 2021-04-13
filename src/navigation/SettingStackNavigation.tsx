import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from 'estore/screens/SettingScreen';
import UserAddressScreen from 'estore/screens/UserAddressScreen';
import { SettingStackParamList } from 'estore/types';

const SettingStack = createStackNavigator<SettingStackParamList>();

export default function SettingStackNavigator() {
    return (
        <SettingStack.Navigator initialRouteName="login">
            <SettingStack.Screen
                component={SettingScreen}
                options={{
                    headerShown: false
                }}
                name="login"
            />
            <SettingStack.Screen
                component={UserAddressScreen}
                options={{
                    headerShown: false
                }}
                name="listUserAddress"
            />
        </SettingStack.Navigator>
    );
}
