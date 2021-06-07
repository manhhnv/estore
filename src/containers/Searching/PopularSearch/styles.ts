import { StyleSheet, Dimensions } from "react-native";
import { adjust } from 'estore/helpers/adjust';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    title: {
        fontSize: adjust(12), 
        fontWeight: "bold", 
        textTransform: "capitalize", 
        letterSpacing: 0.5,
        paddingVertical: 15,
        borderBottomColor: "#e2e4e0",
        borderBottomWidth: 1
    },
    popularContainer: {
        flexDirection: 'row',
        width: width,
        flexWrap: 'wrap',
        paddingBottom: 100
    },
    popularWrapperItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 0.5 * width,
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 7
    },
    popularName: {
        textAlignVertical: 'center',
        paddingLeft: 8,
        fontSize: adjust(10),
        overflow: 'hidden',
        width: 80
    },
    popularThumbnail: {
        width: 80,
        height: 80,
        paddingRight: 5
    }
})