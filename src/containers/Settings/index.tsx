import React, { useEffect, useState } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import Personal from 'estore/components/UserInfo/Personal';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Order,
    useActiveOrderQuery,
    useGetDefaultUserAddressQuery,
    Address
} from 'estore/graphql/generated';

type SettingsProps = {
    logout: ActionCreatorWithPayload<UserSliceType, string>;
    user: UserSliceType;
    addToCart: ActionCreatorWithPayload<Partial<Order>, string>;
    setEmptyCart: ActionCreatorWithPayload<any, string>;
    changeDefaultAddress: ActionCreatorWithPayload<Partial<Address>, string>;
    resetAddress: ActionCreatorWithPayload<any, string>;
};

const Settings = ({
    logout,
    user,
    addToCart,
    setEmptyCart,
    changeDefaultAddress,
    resetAddress
}: SettingsProps) => {
    const navigation = useNavigation();
    const [loggingOut, setLoggingOut] = useState(false);
    const { called, loading, data, error } = useActiveOrderQuery({fetchPolicy: "network-only"});
    const {
        called: defaultAddressCalled,
        loading: defaultAddressLoading,
        data: defaultAddressData,
        error: defaultAddressError
    } = useGetDefaultUserAddressQuery();
    useEffect(() => {
        if (loggingOut) {
            let timer = setTimeout(() => {
                logout({ token: undefined, me: undefined });
                setEmptyCart(null);
                resetAddress(null);
                navigation.navigate('Home');
            }, 500);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [loggingOut]);
    useEffect(() => {
        if (data?.activeOrder) {
            const order = data.activeOrder as Partial<Order>;
            addToCart(order);
        }
    }, [data]);
    useEffect(() => {
        if (defaultAddressData?.getDefaultUserAddress) {
            changeDefaultAddress(defaultAddressData.getDefaultUserAddress);
        }
    }, [defaultAddressData]);
    const logoutHandle = () => {
        Alert.alert(
            'Ebuy',
            'Bạn có chắc chắn muốn đăng xuất khỏi thiết bị này ?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        setLoggingOut(true);
                    }
                }
            ]
        );
    };
    return (
        <React.Fragment>
            <ScrollView>
                <Personal user={user} />
                <View style={{ backgroundColor: 'white', marginTop: 20 }}>
                    <ListItem bottomDivider style={{ marginVertical: 5 }}>
                        <Icon name="money" />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Ebuy Rewards
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider style={{ marginVertical: 5 }} onPress={() => navigation.navigate("Wishlist")}>
                        <Icon
                            name="heart"
                            type="font-awesome"
                            color="#f74d28"
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Đã thích
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider style={{ marginVertical: 5 }} onPress={() => navigation.navigate("orderStatistics", { success: false })}>
                        <Icon
                            name="list-alt"
                            type="font-awesome"
                            color="#12b766"
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Đơn mua
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem
                        style={{ marginTop: 5 }}
                        onPress={() => navigation.navigate('listUserAddress')}
                    >
                        <Icon name="local-shipping" color="#107383" />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Địa chỉ giao hàng
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </View>
                <View style={{ backgroundColor: 'white', marginTop: 20 }}>
                    <ListItem bottomDivider style={{ marginVertical: 5 }} onPress={() => navigation.navigate("privacyPolicy")}>
                        <Icon name="policy" />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Chính sách bảo mật
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider style={{ marginVertical: 5 }} onPress={() => navigation.navigate("helpCenter")}>
                        <Icon
                            name="question-circle"
                            type="font-awesome"
                            color="#12b766"
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Trung tâm trợ giúp
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem bottomDivider style={{ marginVertical: 5 }} onPress={() => navigation.navigate("chat")}>
                        <Icon name="wechat" type="antdesign" color="#2adbcf" />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Trò chuyện với Ebuy
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <ListItem style={{ marginTop: 5 }} onPress={logoutHandle}>
                        <Icon name="poweroff" type="antdesign" color="red" />
                        <ListItem.Content>
                            <ListItem.Title>
                                <Text
                                    style={{
                                        fontFamily: 'castoro',
                                        letterSpacing: 0.5
                                    }}
                                >
                                    Đăng xuất
                                </Text>
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </View>
            </ScrollView>
            {loggingOut ? (
                <View style={styles.overlayLoadingContainer}>
                    <ActivityIndicator color="#ee4d2d" size="large" />
                </View>
            ) : null}
        </React.Fragment>
    );
};
export default React.memo(Settings);
