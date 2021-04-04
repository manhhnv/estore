import { adjust } from 'estore/helpers/adjust';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    username: {
        color: 'white',
        fontFamily: 'castoro',
        fontSize: adjust(13),
        marginLeft: 12,
        letterSpacing: 1
    },
    personalContainer: {
        backgroundColor: 'coral',
        flexDirection: 'row',
        flex: 1
    }
})