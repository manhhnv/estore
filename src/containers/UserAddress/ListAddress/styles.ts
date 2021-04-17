import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        marginTop: 0.3*height,
        flex: 1,
        alignItems: 'center'    
    },
    addButtonContainer: {
        width: 0.4 * width,
        height: 0.1 * height,
        backgroundColor: "white",
        borderStyle: 'dotted',
        borderRadius: 1,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
    },
    addAddressText: {
        textAlign: 'center',
        letterSpacing: 0.8
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})