import { StyleSheet, Dimensions } from 'react-native';
import {adjust} from 'estore/helpers/adjust';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    productsLayoutContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    productItem: {
        width: 0.5 * width - 15,
        margin: 7.5,
        marginVertical: 20
    },
    productImage: {
        height: 240
    },
    productName: {
        fontSize: adjust(12),
        padding: 5,
        textAlign: "center",
        fontFamily: "castoro"
    },
    productPrice: {
        color: "#e60004",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: adjust(12)
    },
    productPriceBeforeDiscount: {
        color: "#888989",
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "line-through",
    },
    productSale: {
        position: "absolute",
        backgroundColor: "red",
        zIndex: 1,
        width: 40
    },
    saleText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    }
})
export default styles;
