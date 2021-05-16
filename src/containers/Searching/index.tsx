import React from 'react';
import styles from './styles';
import SearchingHeader from './Header';
import HistorySearch from './HistorySearch';
import PopularSearch from './PopularSearch';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice';

const Search = () => {
    return (
        <View>
            <SearchingHeader />
            <ScrollView>
                <HistorySearch />
                <PopularSearch />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        history: state.history
    }
}

export default React.memo(Search);
