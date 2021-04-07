import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from 'estore/types';
import ProductDetail from 'estore/containers/Products/Detail';

type ProductDetailScreenProps = {
    navigation: NavigationProp<HomeStackParamList>;
    route: RouteProp<HomeStackParamList, "ProductDetail">
}

const ProductDetailScreen = ({ navigation, route }: ProductDetailScreenProps) => {
    console.log(route.params?.productId)
    return (
        <ScrollView>
            <ProductDetail productId={route.params?.productId ? route.params.productId : ''}/>
        </ScrollView>
    )
}

export default ProductDetailScreen;
