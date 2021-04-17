import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TabOneScreen from 'estore/screens/TabOneScreen';
import WishlistScreen from 'estore/screens/WishlistScreen';
import {
    BottomTabParamList,
    TabOneParamList,
    TabTwoParamList
} from 'estore/types';
import SettingStackNavigator from 'estore/navigation/SettingStackNavigation';
import HomeStack from 'estore/navigation/HomeStack';
import { RootState } from 'estore/redux/slice/index';
import { connect } from 'react-redux';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

type WishlistProps = {
    wishlist: any
};

const BottomTabNavigator = ({wishlist}: WishlistProps) => {
    return (
        <BottomTab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{ activeTintColor: '#ee4d2d' }}
        >
            <BottomTab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Notification"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="notifications" color={color} />
                    ),
                    tabBarBadge: '9+'
                }}
            />
            <BottomTab.Screen
                name="Favorite"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="heart" color={color} />
                    ),
                    tabBarBadge: wishlist.length > 0 ? wishlist.length : null
                }}
            />
            <BottomTab.Screen
                name="Setting"
                component={SettingStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="settings" color={color} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        wishlist: state.wishlist
    };
};

const mapDispatchToProps = { };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(BottomTabNavigator));


// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
}) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={WishlistScreen}
                options={{ headerTitle: 'Wishlists' }}
            />
        </TabTwoStack.Navigator>
    );
}
