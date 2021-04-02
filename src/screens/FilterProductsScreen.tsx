import React, { useState, useCallback } from 'react';
import { Header, Icon, Badge, withBadge } from 'react-native-elements';
import { Dimensions, Text, View, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Extension from 'estore/containers/Extension';
import ProductRecommendation from 'estore/containers/ProductRecommendation';
import FlashSale from 'estore/containers/FlashSale';
import Banners from 'estore/containers/Banner';
import { FeatureProducts } from 'estore/containers/Products';
import  Categories  from 'estore/containers/Categories'
const { width, height } = Dimensions.get("screen");

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const FilterProductsScreen = ({ navigation, route }: any) => {

    console.log(route.params.categoryId)

    return (
        <React.Fragment>
            <View style={{width, height, backgroundColor: "blue"}}>
                <Text>Filter Products Screen</Text>
            </View>
            
        </React.Fragment>
    )
}
export default FilterProductsScreen;