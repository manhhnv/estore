import { Dimensions, StyleSheet } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    listProductName: {
        borderWidth: 1,
        borderColor: 'red',
        marginTop: 50,
        marginBottom: 15,
        fontSize: adjust(13),
        color: '#ee4d2d',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    subHeaderContainer: {
        backgroundColor: '#ee4d2d',
        marginBottom: 10,
        width,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    },
});
