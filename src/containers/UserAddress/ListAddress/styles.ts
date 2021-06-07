import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {},
    addButtonContainer: {
        width: 0.4 * width,
        height: 0.08 * height,
        backgroundColor: 'white',
        borderStyle: 'dotted',
        borderRadius: 1,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center'
    },
    addAddressText: {
        textAlign: 'center',
        letterSpacing: 0.8
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export const addressItemStyles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        paddingLeft: 10,
        paddingVertical: 15
    }
});
