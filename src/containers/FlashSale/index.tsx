import React from 'react';
import { Text, View } from 'react-native';
import CountDown from './CountDown';
import ProductFlashSale from './ProductFlashSale';

const FlashSale = () => {
    return (
        <View>
            <CountDown />
            <ProductFlashSale />
        </View>
    )
}
export default FlashSale;