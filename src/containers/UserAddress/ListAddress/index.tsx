import React, { useEffect } from 'react';
import { useGetUserAddressesQuery } from 'estore/graphql/generated';
import { Dimensions, View, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { SettingStackParamList } from 'estore/types';

const { width, height } = Dimensions.get('window');

const ListAddress = () => {
    // const {
    //     called,
    //     loading,
    //     data,
    //     error
    // } = useGetUserAddressesQuery();

    // useEffect(() => {
    //     console.log(data)
    // }, [data])
    // useEffect(() => {
    //     console.log("loading")
    // }, [loading])
    // useEffect(() => {
    //     console.log(error)
    // }, [error])
    const navigation = useNavigation<NavigationProp<SettingStackParamList>>()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.addButtonContainer}
                onPress={() => navigation.navigate("addUserAddress")}
            >
                <Text style={styles.addAddressText}>Thêm địa chỉ</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ListAddress;
