import React from 'react';
import SearchingHeader from './Header';
import HistorySearch from './HistorySearch';
import PopularSearch from './PopularSearch';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootState } from 'estore/redux/slice';

const Search = () => {
    return (
        <View>
            <SearchingHeader autoFocus={true}/>
            <ScrollView>
                <HistorySearch />
                <PopularSearch />
            </ScrollView>
        </View>
    )
}

export default React.memo(Search);
