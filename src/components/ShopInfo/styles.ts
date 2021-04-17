import { adjust } from 'estore/helpers/adjust';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    shopInfoContainer: {
        backgroundColor: 'white',
        marginTop: 12,
        paddingBottom: 20
    },
    shopAvatar: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    shopName: {
        fontWeight: 'bold',
        marginTop: 5,
        letterSpacing: 1
    },
    viewShopButtonContainer: {
        position: 'absolute',
        right: 10,
        top: 22
    },
    shopOverview: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'center'
    },
    overviewField: {
        width: 0.3 * (width - 2),
        alignItems: 'center'
    },
    driverVertically: {
        width: 1,
        backgroundColor: '#e8e8e8',
        height: 55
    },
    overviewValue: {
        color: '#ee4d2d',
        fontSize: adjust(15),
        paddingBottom: 10
    },
    overviewFieldName: {
        fontSize: adjust(13)
    }
});
