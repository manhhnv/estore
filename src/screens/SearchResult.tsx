import React from 'react';
import { View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import SearchingResult from 'estore/containers/Searching/Result';

const SearchResult = () => {
    const route = useRoute<RouteProp<RootStackParamList, "searchResult">>();
    const name = route.params?.name.trim()
    if (name) {
        return (
            <SearchingResult name={name} />
        )
    }
    return (
        <View></View>
    )
}

export default SearchResult;
