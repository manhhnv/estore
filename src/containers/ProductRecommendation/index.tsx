import React from 'react';
import * as products from './data.json';
import ProductListLayout from 'estore/components/ProductListLayout';
import { Text, View, Dimensions } from 'react-native';
import styles from 'estore/containers/ProductRecommendation/styles';

const { width } = Dimensions.get("window");

const ProductRecommendation = () => {
    return (
        <React.Fragment>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.listProductName}>{products.name}</Text>
                <Text style={[styles.listProductName, { marginLeft: 0.41*width, textDecorationLine: "underline" }]}>View all</Text>
            </View>
            <ProductListLayout products={products.items} />
        </React.Fragment>
    )
}
export default ProductRecommendation;