import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#ee4d2d',
        marginBottom: 10,
        width,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    },
    filterSelectContainer: {
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        height: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 4
    },
    filterSelectText: {
        letterSpacing: 1,
        fontSize: 13,
        fontFamily: 'castoro',
        color: 'white'
    },
    iconContainer: {
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    iconContainerNot: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ee4d2d',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    icon: {
        padding: 5,
        color: 'white'
    },
    iconNot: {
        padding: 5,
        color: '#ee4d2d'
    }
});
