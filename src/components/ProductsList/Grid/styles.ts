import { StyleSheet, Dimensions } from 'react-native';
import {adjust} from 'estore/helpers/adjust';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    productsLayoutContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    productItem: {
        width: 0.5 * width,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    productImage: {
        marginTop: 5,
        marginBottom: 5,
        width: 0.5 * width * 0.95,
        height: 230,
    },
    nameContainer: {
        width: "95%",
        height: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center"
    },
    productName: {
        fontSize: adjust(13),
        // padding: 5,
        fontFamily: "castoro",
        minHeight: 40
    },
    priceContainer: {
        marginBottom: 5,
        width: "95%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center"
    },
    priceChildContainer: {
        width: "auto",
        height: "auto",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "center"
    },
    productPrice: {
        color: "black",
        textAlign: "center",
        fontSize: adjust(11),
        fontFamily: "castoro",
        letterSpacing: 1,
    },
    productPriceBeforeDiscount: {
        fontSize: adjust(10),
        color: "grey",
        fontWeight: "bold",
        textDecorationLine: "line-through",
    },
    cartIconContainer: {
        backgroundColor: "coral",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginRight: 5
    },
    iconCart: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    productSale: {
        position: "absolute",
        zIndex: 1,
        width: "auto",
        height: "auto",
        borderRadius: 5,
        top: 0,
        left: 10
    },
    saleText: {
        position: "absolute",
        top: 5,
        // left: 5,
        fontSize: 16,
        padding: 5,
        // paddingLeft: 10,
        // paddingRight: 10,
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
    heartIconContainer: {
        position: "absolute",
        zIndex: 1,
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        top: 10,
        right: 10
    }
})
export default styles;
