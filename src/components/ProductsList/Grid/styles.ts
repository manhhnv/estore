import { StyleSheet, Dimensions } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    productsLayoutContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width,
        paddingBottom: 20
    },
    productItem: {
        width: 0.5 * width,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 5
    },
    productImage: {
        marginTop: 5,
        marginBottom: 5,
        width: 0.5 * width * 0.95,
        height: 230
    },
    nameContainer: {
        width: '95%',
        height: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center'
    },
    productName: {
        fontSize: adjust(13),
        // padding: 5,
        fontFamily: 'castoro',
        minHeight: 40
    },
    priceContainer: {
        marginBottom: 5,
        width: '95%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    priceChildContainer: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'center'
    },
    productPrice: {
        color: '#ee4d2d',
        textAlign: 'center',
        fontSize: adjust(11),
        fontFamily: 'castoro',
        letterSpacing: 1,
        fontWeight: "bold"
    },
    productPriceBeforeDiscount: {
        fontSize: adjust(10),
        color: 'grey',
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    cartIconContainer: {
        backgroundColor: '#ee4d2d',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 5
    },
    heartIcon: {
        padding: 10
    },
    iconCart: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    productSale: {
        position: 'absolute',
        zIndex: 1,
        width: 'auto',
        height: 'auto',
        borderRadius: 5,
        top: 3,
        left: 6
    },
    saleText: {
        position: 'absolute',
        top: 5,
        fontSize: adjust(12),
        padding: 5,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    heartIconContainer: {
        borderRadius: 50,
        backgroundColor: '#ee4d2d',
        position: 'absolute',
        zIndex: 1,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        top: 5,
        right: 5
    },
    heartIconContainerInWL: {
        borderRadius: 50,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 1,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        top: 5,
        right: 5
    }
});
export default styles;
