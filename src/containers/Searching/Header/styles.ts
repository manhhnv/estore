import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    goBackButton: {
        backgroundColor: 'white',
        padding: 0
    },
    searchBox: {
        flex: 1,
        backgroundColor: '#e2e4e0',
        paddingLeft: 7,
        paddingVertical: 2
    }
})
