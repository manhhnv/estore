import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    categoriesContainer: {
        marginTop: 15,
        backgroundColor: 'white',
        height: 'auto',
        width,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    categoriesChildContainer: {
        backgroundColor: 'white',
        height: 'auto',
        width: width * 0.95,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    categoryBlock: {
        height: 'auto',
        width: (width * 0.95) / 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    categoryLogoContainer: {
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        minHeight: 50
    },
    categoryLogo: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: 55,
        width: 55
    },
    categoryImage: {
        height: '100%',
        width: '100%',
        borderRadius: 30
    },
    categoryName: {
        fontSize: 13,
        textAlign: 'center',
        textAlignVertical: 'top',
        fontFamily: 'castoro',
        minHeight: 40
    }
});
