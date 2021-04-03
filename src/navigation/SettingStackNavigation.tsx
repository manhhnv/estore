import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from 'estore/screens/SettingScreen';
import { SettingStackParamList } from 'estore/types';

const SettingStack = createStackNavigator<SettingStackParamList>();

export default function SettingStackNavigator () {
    return (
        <SettingStack.Navigator>
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