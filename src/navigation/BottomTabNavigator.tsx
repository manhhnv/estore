import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import WishlistScreen from 'estore/screens/WishlistScreen';
import {
    BottomTabParamList,
} from 'estore/types';
import SettingStackNavigator from 'estore/navigation/SettingStackNavigation';
import HomeStack from 'estore/navigation/HomeStack';
import { RootState } from 'estore/redux/slice/index';
import { connect } from 'react-redux';
import NotificationScreen from 'estore/screens/NotificationScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

type WishlistProps = {
    wishlist: any;
};

const BottomTabNavigator = ({ wishlist }: WishlistProps) => {
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
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="notifications" color={color} />
                    ),
                    tabBarBadge: '9+'
                }}
            />
            <BottomTab.Screen
                name="Wishlist"
                component={WishlistScreen}
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
};

const mapStateToProps = (state: RootState) => {
    return {
        wishlist: state.wishlist
    };
};

const mapDispatchToProps = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(BottomTabNavigator));

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
}) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}