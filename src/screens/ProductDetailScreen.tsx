import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';
import ProductDetail from 'estore/containers/Products/Detail';
import FeatureHeader from 'estore/components/FeatureHeader';

type ProductDetailScreenProps = {
    route: RouteProp<RootStackParamList, "ProductDetail">
}

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {

    if (route.params?.productId) {
        return (
            <React.Fragment>
                <FeatureHeader />
                <View style={{ flex: 1 }}>
                    <ProductDetail productId={route.params.productId} />
                </View>
            </React.Fragment>
        )
    }
    else return null;
}

export default ProductDetailScreen;
