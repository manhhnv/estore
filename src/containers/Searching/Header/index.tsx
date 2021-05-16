import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { Header, Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

type SearchingHeaderProps = {
    searchProduct?: () => void
}

const SearchingHeader = ({ searchProduct }: SearchingHeaderProps) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const [name, setName] = useState('');
    
    const nameOnChangeHandle = (text: string) => {
        const formatText = text.trim();
        setName(formatText);
    }

    return (
        <Header
            placement="right"
            leftComponent={
                <Button
                    buttonStyle={styles.goBackButton}
                    icon={<Icon name="back" type="antdesign" color="#ee4d2d" />}
                    onPress={goBack}
                />
            }
            centerComponent={
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.searchBox}
                        placeholder="Tìm kiếm sản phẩm"
                        autoCorrect
                        autoFocus
                        onChangeText={(text: string) => nameOnChangeHandle(text)}
                        value={name}
                    />
                </View>
            }
            backgroundColor="white"
        />
    );
};

export default React.memo(SearchingHeader);
