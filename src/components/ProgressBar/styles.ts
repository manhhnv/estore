import { StyleSheet } from 'react-native';
import { adjust } from 'estore/helpers/adjust';

export default StyleSheet.create({
    lineStyle: {
        borderBottomWidth: 2,
        borderColor: '#14b464',
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        top: 30
    },
    progressContainer: {
        flex: 1, flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 50,
        marginHorizontal: 10,
    }
})

export const progressItemStyles =  StyleSheet.create({
    activeItem: {
        backgroundColor: "#ee4d2d",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        borderColor: '#ee4d2d',
        borderWidth: 2
    },
    queuingItem: {
        backgroundColor: "#e7e7e7",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        borderColor: '#e7e7e7',
        borderWidth: 2,
    },
    name: {
        textAlign: "center",
        top: 65,
        width: 75,
        position: "absolute",
        color: "black",
        fontSize: adjust(11),
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        right: -10
    },
    activeStepText: {
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: adjust(9)
    },
    queuingStepText: {
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "black",
        fontSize: adjust(10)
    }
})