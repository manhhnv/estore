import React, { useCallback, useEffect } from 'react';
import { useGetUserAddressesLazyQuery } from 'estore/graphql/generated';
import {
    View,
    Text,
    ActivityIndicator,
    ToastAndroid,
    Dimensions
} from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';
import { AddressFlatList } from './AddressFlatList';
import { Icon, Image } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const ListAddress = () => {
    const [
        executeGetAddresses,
        { called, loading, data, error }
    ] = useGetUserAddressesLazyQuery({fetchPolicy: "network-only"});
    const getUserAddresses = () => {
        executeGetAddresses();
    };
    const getAddressError = () => {
        ToastAndroid.show('Có lỗi xảy ra', ToastAndroid.SHORT);
    };
    useEffect(() => {
        getUserAddresses();
    }, []);
    useEffect(() => {
        if (error && error.message) {
            getAddressError();
        }
    }, [error]);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <React.Fragment>
            {data &&
            data.getUserAddresses &&
            data.getUserAddresses.items?.length === 0 ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <Image
                        source={require('estore/assets/images/no-item.png')}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                    />
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.addButtonContainer}
                            onPress={() =>
                                navigation.navigate('addUserAddress', {
                                    getUserAddresses: getUserAddresses
                                })
                            }
                        >
                            <Text style={styles.addAddressText}>
                                Thêm địa chỉ
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
            {data &&
            data.getUserAddresses &&
            data.getUserAddresses.items &&
            data.getUserAddresses.items.length > 0 ? (
                <AddressFlatList addresses={data.getUserAddresses.items} getUserAddresses={getUserAddresses} navigation={navigation}/>
            ) : null}
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color="#ee4d2d" size="large" />
                </View>
            ) : null}
        </React.Fragment>
    );
};
export default ListAddress;
