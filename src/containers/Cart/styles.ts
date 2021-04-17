import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    overlayLoadingContainer: {
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
    }
});
