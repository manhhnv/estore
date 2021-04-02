import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from 'estore/screens/RegisterScreen';
import SettingScreen from 'estore/screens/SettingScreen';
import { SettingStackParamList } from 'estore/types';

const SettingStack = createStackNavigator<SettingStackParamList>();

export default function SettingStackNavigator () {
    return (
        <SettingStack.Navigator>
            <SettingStack.Screen
                component={RegisterScreen}
                options={{
                    headerShown: false
                }}
                name="register"
            />
            <SettingStack.Screen
                component={SettingScreen}
                options={{
                    headerShown: false
                }}
                name="login"
            />
        </SettingStack.Navigator>
    )
}