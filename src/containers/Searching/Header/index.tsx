import React, { useState } from 'react';
import { View, TextInput, TextProps, StyleProp, TextStyle } from 'react-native';
import styles from './styles';
import { Header, Button, Icon } from 'react-native-elements';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {
    addSearchHistory,
} from 'estore/redux/slice/historySlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootStackParamList } from 'estore/types';
import { IconObject } from 'react-native-elements/dist/icons/Icon';

interface HeaderIcon extends IconObject {
    icon?: string;
    text?: string;
    color?: string;
    style?: StyleProp<TextStyle>;
}

type SearchingHeaderProps = {
    addSearchHistory?: ActionCreatorWithPayload<string, string>;
    currentKeyWord?: string;
    autoFocus?: boolean;
    rightComponent?: React.ReactElement<{}> | TextProps | HeaderIcon
};

const SearchingHeader = ({
    addSearchHistory,
    currentKeyWord,
    autoFocus,
    rightComponent
}: SearchingHeaderProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const goBack = () => {
        navigation.goBack();
    };
    const [name, setName] = useState(currentKeyWord ? currentKeyWord : '');

    const nameOnChangeHandle = (text: string) => {
        const formatText = text;
        setName(formatText);
    };

    const submitSearch = () => {
        if (addSearchHistory) {
            const formattedName = name.trim();
            if (formattedName) {
                addSearchHistory(formattedName);
                navigation.navigate("searchResult", { name: formattedName })
            }
        }
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
                        autoFocus={autoFocus}
                        onChangeText={(text: string) =>
                            nameOnChangeHandle(text)
                        }
                        value={name}
                        onSubmitEditing={submitSearch}
                    />
                </View>
            }
            rightComponent={
                rightComponent
            }
            backgroundColor="white"
        />
    );
};


const mapDispatchToProps = { addSearchHistory };

export default connect(
    null,
    mapDispatchToProps
)(React.memo(SearchingHeader));
