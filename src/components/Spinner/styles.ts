import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    overLoadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'black',
        opacity: 0.15
    },
    activityIndicator: {
        flex: 1,
        position: 'absolute',
        bottom: 0.5 * height,
        alignSelf: 'center'
    }
});
