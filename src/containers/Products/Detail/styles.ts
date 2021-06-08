import { adjust } from 'estore/helpers/adjust';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    addingButtonGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addingButtonCommon: {
        height: 54,
        borderRadius: 0
    },
    addingButtonContainer: {
        borderWidth: 0,
        borderRadius: 0
    },
    realPrice: {
        color: '#ee4d2d',
        fontSize: adjust(14),
        fontFamily: 'castoro',
        letterSpacing: 1,
        marginTop: 10
    },
    priceBeforeDiscount: {
        fontSize: adjust(12),
        color: 'grey',
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    configOptionContainer: {
        marginTop: 30,
        paddingBottom: 15
    },
    configName: {
        fontSize: adjust(13),
        marginLeft: 20,
        marginBottom: 20
    },
    listConfigValuesContainer: {
        flexDirection: 'row',
        width: width,
        flexWrap: 'wrap'
    },
    configValueContainer: {
        backgroundColor: '#f5f5f5',
        minWidth: 70,
        marginLeft: 20,
        borderRadius: 4,
        marginBottom: 12
    },
    configValue: {
        overflow: 'hidden',
        paddingVertical: 8,
        textAlign: 'center'
    },
    driver: {
        height: 1,
        width: width,
        backgroundColor: '#e8e8e8'
    },
    productDetailContainer: {
        paddingHorizontal: 10,
        backgroundColor: 'white',
        paddingBottom: 30
    },
    productName: {
        fontFamily: 'serif',
        fontSize: adjust(13),
        letterSpacing: 0.5,
        lineHeight: 25,
        marginTop: 12
    },
    configsBottomSheet: {
        height: 50,
        backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'
    },
    bottomSheetBody: {
        flex: 1,
        backgroundColor: 'white',
        height: 'auto',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    productInfoInBottomSheet: {
        flexDirection: 'row',
        paddingBottom: 5
    },
    productThumbnail: {
        width: 125,
        height: 125,
        borderRadius: 5,
        margin: 10
    },
    priceInBottomSheet: {
        position: 'absolute',
        top: 80,
        left: 150,
        fontSize: adjust(12),
        color: '#ee4d2d',
        letterSpacing: 1
    },
    inStock: {
        position: 'absolute',
        top: 110,
        left: 150,
        fontSize: adjust(12)
    },
    orderQuantityContainer: {
        marginTop: 30,
        paddingBottom: 15
    },
    quantityText: {
        fontSize: adjust(13),
        marginLeft: 20,
        marginBottom: 20
    },
    adjustQuantityButton: {
        borderColor: 'gray',
        borderRadius: 0
    },
    buttonInBottomSheet: {
        width: 0.5 * width,
        borderRadius: 0
    },
    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    overlayHeart: {
        tintColor: '#fff',
    },
});
