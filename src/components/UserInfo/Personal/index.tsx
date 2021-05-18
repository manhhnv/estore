import { UserSliceType } from 'estore/redux/slice/userSlice';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Image, Icon, Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

type PersonalProps = {
    user: UserSliceType;
};

const Personal = ({ user }: PersonalProps) => {
    const [avatar, setAvatar] = useState(user.me?.avatar)
    const setDefaultAvatar = () => {
        setAvatar('https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png')
    }
    return (
        <View style={styles.personalContainer}>
            <Image
                source={{
                    uri: avatar ? avatar : 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png',
                    cache: 'force-cache'
                }}
                onError={() => {
                    setDefaultAvatar()
                }}
                containerStyle={{ width: 80, height: 80, borderRadius: 100 }}
            />
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.username}>
                    {user.me?.lastName + ' ' + user.me?.firstName}
                </Text>
                <TouchableOpacity
                    style={{
                        alignItems: 'flex-start',
                        marginLeft: 20,
                        marginTop: 10
                    }}
                >
                    <Icon type="font-awesome" name="edit" color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Personal;
