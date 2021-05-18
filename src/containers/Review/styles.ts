import { StyleSheet } from "react-native";
import { adjust } from 'estore/helpers/adjust';

export default StyleSheet.create({
    productName: {
        fontFamily: 'serif',
        fontSize: adjust(13),
        letterSpacing: 0.5,
        lineHeight: 25,
        marginTop: 12
    },
})