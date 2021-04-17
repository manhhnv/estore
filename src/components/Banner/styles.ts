import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideItem: {
        flex: 1
    },
    wrapper: {},
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: width,
        height: 400,
    }
});

export default styles;
