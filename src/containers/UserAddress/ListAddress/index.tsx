import React, { useCallback, useEffect, useState } from 'react';
import { useGetUserAddressesLazyQuery } from 'estore/graphql/generated';
import { Dimensions, View, Text, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';

const { width, height } = Dimensions.get('window');

const ListAddress = () => {
    const [
        executeGetAddresses,
        {
            called,
            loading,
            data,
            error
        }
    ] = useGetUserAddressesLazyQuery();
    const getUserAddresses = useCallback(() => {
        executeGetAddresses()
    }, [])
    const getAddressError = () => {
        ToastAndroid.show("Có lỗi xảy ra", ToastAndroid.SHORT)
    }
    useEffect(() => {

    }, [loading])
    useEffect(() => {
        executeGetAddresses()
    }, [])
    useEffect(() => {
        if (error && error.message) {
            getAddressError()
        }
    }, [error])
    const [count, setCount] = useState(1)
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <React.Fragment>
            {data && data.getUserAddresses && data.getUserAddresses.items?.length === 0 ? (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.addButtonContainer}
                        onPress={() => navigation.navigate("addUserAddress", { setCount: setCount })}
                    >
                        <Text style={styles.addAddressText}>Thêm địa chỉ</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
            {loading ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator color="#ee4d2d" size="large" />
                </View>
            ) : null}
        </React.Fragment>
    )
}
export default ListAddress;
