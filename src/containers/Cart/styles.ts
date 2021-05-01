import { StyleSheet } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

export const cartItemAction = StyleSheet.create({
    container: {
        width: 80,
        backgroundColor: '#ee4d2d',
        height: 182,
        justifyContent: 'center'
    },
    deleteText: {
        textAlign: 'center',
        color: 'white',
        fontSize: adjust(13),
        paddingBottom: 5
    }
});

export const emptyCart = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    emptyCartText: {
        textAlign: 'center',
        fontSize: adjust(12),
        fontFamily: 'serif',
        letterSpacing: 1,
        opacity: 0.5
    }
});

export const cartItem = StyleSheet.create({
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

export const cartItemAdjust = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    adjustButton: {
        borderColor: 'gray',
        borderRadius: 0
    }
})
