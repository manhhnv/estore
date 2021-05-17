import { adjust } from 'estore/helpers/adjust';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from 'estore/redux/slice';
import { clearSearchHistory } from 'estore/redux/slice/historySlice';
import { connect } from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';

type HistorySearchProps = {
    history?: Array<string>;
    clearSearchHistory?: ActionCreatorWithPayload<any, string>;
};

const HistorySearch = ({ history, clearSearchHistory }: HistorySearchProps) => {
    const [showClearHistory, setShowClearHistory] = useState(false);
    const [lastIndex, setLastIndex] = useState(4);
    const switchOption = () => {
        setShowClearHistory(!showClearHistory);
        setLastIndex(5);
    };
    const clearHistoryHandle = () => {
        if (clearSearchHistory) {
            clearSearchHistory(null);
        }
    };
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const searchByHistoryItem = (name: string) => {
        navigation.navigate("searchResult", { name: name })
    }
    return (
        <View>
            {history &&
                history.slice(0, lastIndex).map((item, index) => (
                    <ListItem
                        key={index}
                        bottomDivider
                        containerStyle={{ paddingVertical: 12 }}
                        onPress={() => searchByHistoryItem(item)}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={{ fontSize: adjust(12) }}>
                                {item}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            {history && history.length > 0 && showClearHistory === false ? (
                <ListItem
                    key={100}
                    bottomDivider
                    containerStyle={{ paddingVertical: 10 }}
                    onPress={switchOption}
                >
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: adjust(11),
                                alignSelf: 'center'
                            }}
                        >
                            Hiển thị nhiều hơn
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ) : history && history.length > 0 ? (
                <ListItem
                    key={101}
                    bottomDivider
                    containerStyle={{ paddingVertical: 10 }}
                    onPress={clearHistoryHandle}
                >
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                fontSize: adjust(11),
                                alignSelf: 'center'
                            }}
                        >
                            Xóa lịch sử tìm kiếm
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ) : null}
        </View>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        history: state.history
    };
};

const mapDispatchToProps = { clearSearchHistory };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(HistorySearch));
