import { StyleSheet } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

export default StyleSheet.create({
    listProductName: {
        marginTop: 50,
        marginBottom: 15,
        fontSize: adjust(13),
        color: "#e68c00",
        textTransform: "uppercase",
        letterSpacing: 1,
        textDecorationLine: "underline",
        textAlign: "center"
    }
})