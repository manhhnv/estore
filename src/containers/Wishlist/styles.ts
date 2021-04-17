import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
import { adjust } from 'estore/helpers/adjust';
export default StyleSheet.create({
    overlayLoadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: "white"
    },
    productsLayoutContainer: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    productItem: {
        marginTop: 5,
        marginBottom: 5,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    imageContainer: {
        width: 0.5 * width * 0.8,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    productImage: {
        width: "90%",
        height: "90%",
        borderRadius: 10
    },
    nameContainer: {
        marginLeft: 5,
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center'
    },
    priceBottomContainer: {
        // marginBottom: 5,
        marginLeft: 5,
        width: 'auto',
        height: 'auto',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'center'
    },
    productName: {
        marginTop: 5,
        fontSize: adjust(13),
        // padding: 5,
        letterSpacing: 1,
        fontFamily: 'castoro',
        minHeight: 40
    },
    productDescription: {
        fontSize: adjust(10),
        fontFamily: 'castoro',
        minHeight: 40,
        color: 'black'
    },
    priceContainer: {
        width: 0.5 * width + 0.5 * width * 0.2,
        height: 150 * 0.9,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'center'
    },
    productPrice: {
        color: '#ee4d2d',
        textAlign: 'center',
        fontSize: adjust(12),
        fontFamily: 'castoro',
        letterSpacing: 1,
        marginRight: 5,
    },
    productPriceBeforeDiscount: {
        fontSize: adjust(11),
        color: 'grey',
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    cartIconContainer: {
        position: 'absolute',
        backgroundColor: '#ee4d2d',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        bottom: 10,
        right: 10
    },
    iconCart: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    productSale: {
        position: 'absolute',
        zIndex: 1,
        width: 'auto',
        height: 'auto',
        borderRadius: 5,
        top: 0,
        left: 0
    },
    saleText: {
        position: 'absolute',
        top: 5,
        fontSize: 16,
        padding: 5,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    heartIconContainer: {
        backgroundColor: '#ee4d2d',
        position: 'absolute',
        zIndex: 1,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        bottom: 10,
        right: 60
    }
});
