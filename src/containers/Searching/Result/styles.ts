import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    goBackButton: {
        backgroundColor: 'white',
        padding: 0
    },
    subHeaderContainer: {
        backgroundColor: '#ee4d2d',
        marginBottom: 10,
        width,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    },

})