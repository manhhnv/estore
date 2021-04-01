import React from 'react';
import {
    SafeAreaView, View, TouchableOpacity, Text, Image
} from 'react-native';
import styles from './styles';
import { Product } from 'estore/graphql/generated';

type GridProps = {
    products: Array<Partial<Product> | null>
} 

const Grid = ({ products }: GridProps) => {
    if (products.length > 0) {
        return (
            <SafeAreaView style={styles.productsLayoutContainer}>
                {products.map((item, index) => {
                    if (item) {
                        return (
                            <TouchableOpacity key={index}>
                                <View style={styles.productItem}>
                                    {item.rawDiscount ? (
                                        <View style={styles.productSale}>
                                            <Text style={styles.saleText}>{'-' + item.rawDiscount + '%'}</Text>
                                        </View>
                                    ) : null}
                                    <View>
                                        <Image resizeMode="cover" style={styles.productImage} source={{ uri: item.thumbnail, cache: "only-if-cached" }} />
                                        <Text style={styles.productName}>{item.name?.slice(0, 27) + '...'}</Text>
                                        <Text style={styles.productPriceBeforeDiscount}>
                                            {item.priceBeforeDiscount ? item.priceBeforeDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ₫': null}
                                        </Text>
                                        <Text style={styles.productPrice}>
                                            {item.price ? item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ₫': null}
                                        </Text>
                                        <Text style={styles.productPrice}>
                                            {item.rating ? item.rating.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                })}
            </SafeAreaView>
        )
    }
    return <View></View>
}
export default React.memo(Grid);