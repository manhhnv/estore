import { Dimensions, StyleSheet } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    configOptionContainer: {
        marginVertical: 10
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
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 10
    },
    priceInBottomSheet: {
        position: 'absolute',
        top: 55,
        left: 125,
        fontSize: adjust(10),
        color: '#ee4d2d',
        letterSpacing: 1
    },
    inStock: {
        position: 'absolute',
        top: 85,
        left: 125,
        fontSize: adjust(12)
    },
    orderQuantityContainer: {
        marginTop: 10
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
    addingButtonCommon: {
        height: 54,
        borderRadius: 0
    }
});
