import { StyleSheet } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

export const cartItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10
    },
    cartItemThumbnail: {
        width: 100,
        height: 115
    },
    wrapperContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        flexWrap: 'wrap',
        width: '90%'
    },
    cartItemName: {
        fontSize: adjust(11)
    },
    cartItemPrice: {
        color: '#ee4d2d',
        fontSize: adjust(12),
        marginTop: 10
    },
    cartItemPriceBeforeDiscount: {
        fontSize: adjust(10),
        color: 'grey',
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        marginTop: 12,
        marginLeft: 10
    }
});
