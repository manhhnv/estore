import { adjust } from "estore/helpers/adjust";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    addingButtonGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addingButtonCommon: {
        height: 50,
        borderRadius: 0,
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
    }
})