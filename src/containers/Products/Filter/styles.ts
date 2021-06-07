import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    filterSelectContainer: {
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        height: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 4
    },
    filterSelectText: {
        letterSpacing: 1,
        fontSize: 13,
        fontFamily: 'castoro',
        color: 'white'
    },
    icon: {
        padding: 5,
        color: 'white'
    },
    modalContainer: {
        width: 0.9*width,
        height: 0.5*height
    },
    titleFilter: {
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    cancelFilterButton: {
        width: 0.3 * width
    },
    applyFilterButton: {
        width: 0.3 * width
    }
})