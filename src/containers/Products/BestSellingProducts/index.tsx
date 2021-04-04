import React from 'react';
import { useBestSellingQuery } from 'estore/graphql/generated';
import SlidePlaceholder from 'estore/components/templates/SlidePlaceholder';
import SlideProducts from 'estore/components/ProductsList/Slide';
import styles from './styles';
import { View, Text } from 'react-native';

const BestSellingProducts = () => {
    const { called, data, loading, error } = useBestSellingQuery();
    if (called && loading) {
        <SlidePlaceholder />
    }
    if (data && data.products && data.products.items) {
        return (
            <React.Fragment>
                 <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={styles.listProductName}>Sản phẩm bán chạy</Text>
                </View>
                <SlideProducts products={data.products.items}/>
            </React.Fragment>
        )
    }
    return <View></View>
}
export default BestSellingProducts;