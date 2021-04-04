import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import Personal from 'estore/components/UserInfo/Personal';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

type SettingsProps = {
    logout: ActionCreatorWithPayload<UserSliceType, string>;
    user: UserSliceType
}

const Settings = ({ logout, user }: SettingsProps) => {
    const navigation = useNavigation();
    const logoutHandle = () => {
        logout({token: undefined, me: undefined});
        navigation.navigate("Home")
    }
    return (
        <ScrollView style={styles.container}>
            <Personal user={user} />
            <Button title='Đăng xuất' onPress={logoutHandle}></Button>
        </ScrollView>
    )
}
export default React.memo(Settings);

