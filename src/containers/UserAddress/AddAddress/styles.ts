import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const customerInfoStyles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    nextStepButton: {
        width: 0.6 * width,
        alignSelf: 'center',
        marginTop: 15
    }
})

const addressInfoStyles = StyleSheet.create({
    overlayContainer: {
        width: 0.9 * width,
        height: 0.8 * height
    }
})

const otherInfoStyles = StyleSheet.create({
    overlayContainer: {
        width: 0.9 * width,
        height: 0.2 * height
    }
})

export { customerInfoStyles, addressInfoStyles, otherInfoStyles }