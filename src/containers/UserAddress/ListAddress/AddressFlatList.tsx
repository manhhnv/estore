import React, { useCallback, useEffect } from 'react';
import {
    Address,
    useRemoveUserAddressMutation
} from 'estore/graphql/generated';
import {
    View,
    FlatList,
    ActivityIndicator,
    Dimensions,
    ToastAndroid
} from 'react-native';
import { AddressItem } from './AddressItem';
import { Icon, Button } from 'react-native-elements';
import { NavigationProp } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';
type AddressFlatListProps = {
    addresses: Array<Partial<Address> | null>;
    getUserAddresses: () => void;
    navigation: NavigationProp<RootStackParamList>;
};

const { height } = Dimensions.get('window');

export const AddressFlatList = React.memo(
    ({ addresses, getUserAddresses, navigation }: AddressFlatListProps) => {
        const [
            executeGQL,
            { called, loading, data, error }
        ] = useRemoveUserAddressMutation();
        const removeAddressCallback = useCallback(
            (id: string) => {
                executeGQL({ variables: { id: id } });
            },
            [addresses]
        );
        const removeSuccessToast = () => {
            ToastAndroid.show('Đã xóa địa chỉ', ToastAndroid.SHORT);
        };
        const removeFailedToast = () => {
            ToastAndroid.show('Có lỗi xảy ra', ToastAndroid.SHORT);
        };
        const renderItem = ({ item }: { item: Partial<Address | null> }) => {
            if (item) {
                return (
                    <AddressItem
                        item={item}
                        removeAddressCallback={removeAddressCallback}
                    />
                );
            }
            return <View></View>;
        };
        useEffect(() => {
            if (error && error.message) {
                removeFailedToast();
            }
        }, [error]);
        useEffect(() => {
            if (data && data.removeUserAddress) {
                if (data.removeUserAddress.success === true) {
                    getUserAddresses();
                    removeSuccessToast();
                } else {
                    removeFailedToast();
                }
            }
        }, [data]);
        return (
            <React.Fragment>
                <FlatList
                    data={addresses}
                    renderItem={renderItem}
                    maxToRenderPerBatch={5}
                    removeClippedSubviews={true}
                    key={'_'}
                    keyExtractor={(item) => '_' + item?.id}
                />
                <Button
                    title="Thêm địa chỉ "
                    icon={
                        <Icon
                            type="antdesign"
                            name="plus"
                            size={16}
                            color="white"
                        />
                    }
                    iconRight
                    buttonStyle={{
                        backgroundColor: '#ee4d2d',
                        borderRadius: 0
                    }}
                    style={{ borderRadius: 0 }}
                    containerStyle={{ borderRadius: 0 }}
                    onPress={() =>
                        navigation.navigate('addUserAddress', {
                            getUserAddresses: getUserAddresses
                        })
                    }
                />
                {loading ? (
                    <React.Fragment>
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1,
                                backgroundColor: 'black',
                                opacity: 0.15,
                                flex: 1
                            }}
                        ></View>
                        <ActivityIndicator
                            color="#ee4d2d"
                            size="large"
                            style={{
                                flex: 1,
                                position: 'absolute',
                                bottom: 0.5 * height,
                                alignSelf: 'center'
                            }}
                        />
                    </React.Fragment>
                ) : null}
            </React.Fragment>
        );
    }
);
