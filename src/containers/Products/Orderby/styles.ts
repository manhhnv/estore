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
    },
    titleSort: {
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    cancelSortButton: {
        width: 0.3 * width
    },
    applySortButton: {
        width: 0.3 * width
    }
})