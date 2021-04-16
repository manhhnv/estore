import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const customerInfoStyles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    nextStepButton: {
        width: 0.6*width,
        alignSelf: 'center',
        marginTop: 15
    }
})

export { customerInfoStyles }