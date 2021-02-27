import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slideItem: {
        flex: 1,
    },
    wrapper: {},

    slide1: {
        flex: 1,
    },

    slide2: {
        flex: 1,
    },

    slide3: {
        flex: 1,
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: width,
        height: 200
    }
})

export default styles;