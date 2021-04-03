import { adjust } from "estore/helpers/adjust";
import { Dimensions, Platform, StyleSheet } from "react-native";

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    loginContainer: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'white',
    },
    loginTitle: {
        textAlign: 'center',
        fontSize: adjust(18),
        fontFamily: Platform.OS == "android" ? 'serif' : 'San Francisco',
        marginTop: 0.1 * height,
        fontWeight: "900"
    },
    overlayLoadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'black',
        opacity: 0.15
    },
    registerAccountText: {
        textAlign: 'center',
        marginTop: 0.06*height,
        fontSize: adjust(11),
        fontFamily: 'serif',
        fontStyle: "italic",
        textDecorationLine: 'underline',
        fontWeight: "bold",
        letterSpacing: 1
    }
})