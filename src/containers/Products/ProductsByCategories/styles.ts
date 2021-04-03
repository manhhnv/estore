import { StyleSheet } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

export default StyleSheet.create({
    listProductName: {
        borderWidth: 1,
        borderColor: 'red',
        marginTop: 50,
        marginBottom: 15,
        fontSize: adjust(13),
        color: 'coral',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
});
