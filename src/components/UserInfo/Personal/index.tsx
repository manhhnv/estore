import { UserSliceType } from 'estore/redux/slice/userSlice';
import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import styles from './styles';

type PersonalProps = {
    user: UserSliceType
}

const Personal = ({ user }: PersonalProps) => {
    return (
        <View style={styles.personalContainer}>
            <Image source={{ uri: user.me?.avatar, cache: 'force-cache' }} containerStyle={{ width: 80, height: 80, borderRadius: 100 }} />
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.username}>{user.me?.firstName + ' ' + user.me?.lastName}</Text>
            </View>
        </View>
    )
}
export default Personal;