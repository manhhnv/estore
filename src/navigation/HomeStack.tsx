import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'estore/screens/HomeScreen';
import FilterProductsScreen from 'estore/screens/FilterProductsScreen';
import ProductDetailScreen from 'estore/screens/ProductDetailScreen';
import { HomeStackParamList } from 'estore/types';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="FilterProduct"
                component={FilterProductsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
