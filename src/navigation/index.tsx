import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from 'estore/screens/NotFoundScreen';
import { RootStackParamList } from 'estore/types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ProductDetailScreen from 'estore/screens/ProductDetailScreen';
import ViewCartScreen from 'estore/screens/ViewCartScreen';
import UserAddressScreen from 'estore/screens/UserAddressScreen';
import AddAddressScreen from 'estore/screens/AddAddressScreen';
import CheckoutScreen from 'estore/screens/CheckoutScreen';
import SearchScreen from 'estore/screens/SearchScreen';
import SearchResult from 'estore/screens/SearchResult';
import ChatScreen from 'estore/screens/ChatScreen';
import PrivacyPolicyScreen from 'estore/screens/PrivacyPolicyScreen';
import HelpCenterScreen from 'estore/screens/HelpCenterScreen';
import OrderStatisticScreen from 'estore/screens/OrderStatisticsScreen';
import OrderDetailScreen from 'estore/screens/OrderDetailScreen';

export default function Navigation({
    colorScheme
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="ViewCart"
                component={ViewCartScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="listUserAddress"
                component={UserAddressScreen}
            />
            <Stack.Screen name="addUserAddress" component={AddAddressScreen} />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Screen name="checkout" component={CheckoutScreen} />
            <Stack.Screen name="searchProduct" component={SearchScreen} />
            <Stack.Screen name="searchResult" component={SearchResult} />
            <Stack.Screen name="chat" component={ChatScreen} />
            <Stack.Screen name="privacyPolicy" component={PrivacyPolicyScreen} />
            <Stack.Screen name="helpCenter" component={HelpCenterScreen} />
            <Stack.Screen name="orderStatistics" component={OrderStatisticScreen}/>
            <Stack.Screen name="orderDetail" component={OrderDetailScreen} />
        </Stack.Navigator>
    );
}
