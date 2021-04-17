import React, { useCallback, useEffect } from 'react';
import { useGetUserAddressesLazyQuery } from 'estore/graphql/generated';
import { View, Text, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';

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
    useEffect(() => {
        if (data?.getUserAddresses?.items) {
            console.log(data.getUserAddresses.items)
        }
    }, [data])
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <React.Fragment>
            {data && data.getUserAddresses && data.getUserAddresses.items?.length === 0 ? (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.addButtonContainer}
                        onPress={() => navigation.navigate("addUserAddress", { getUserAddresses: getUserAddresses })}
                    >
                        <Text style={styles.addAddressText}>Thêm địa chỉ</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color="#ee4d2d" size="large" />
                </View>
            ) : null}
        </React.Fragment>
    )
}
export default ListAddress;
