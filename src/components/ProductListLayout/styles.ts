import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    productsLayoutContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    productItem: {
        width: 0.5 * width - 15,
        margin: 7.5,
    },
    productImage: {
        height: 250
    },
    productName: {
        fontSize: 12,
        padding: 5,
        textAlign: "center"
    },
    productPrice: {
        color: "#e60004",
        fontWeight: "bold",
        textAlign: "center"
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