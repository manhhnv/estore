import React from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList
} from 'react-native';
import styles from './styles';
import { Product } from 'estore/graphql/generated';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
type SlideProps = {
    products: Array<Partial<Product> | null>;
};

const Slide = ({ products }: SlideProps) => {
    const renderItem = ({ item }: { item: Partial<Product> | null }) => {
        if (item) {
            return <ProductItem item={item} />;
        }
        return <Text></Text>;
    };
    if (products.length > 0) {
        return (
            <SafeAreaView style={{ marginVertical: 20 }}>
                <FlatList
                    key={'_'}
                    keyExtractor={(item) => '_' + item?.id}
                    data={products}
                    renderItem={renderItem}
                    maxToRenderPerBatch={4}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={4}
                    horizontal
                />
            </SafeAreaView>
        );
    }
    return <View></View>;
};
export default Slide;

const ProductItem = React.memo(({ item }: { item: Partial<Product> }) => {
    return (
        <TouchableOpacity key={item.id}>
            <View style={styles.productItem}>
                {item.rawDiscount ? (
                    <View style={styles.productSale}>
                        <FontAwesome5 name="tags" size={40} color="coral" />
                        <Text style={styles.saleText}>
                            {'-' + item.rawDiscount + '%'}
                        </Text>
                    </View>
                ) : null}

                <TouchableOpacity style={styles.heartIconContainer}>
                    <AntDesign
                        name="hearto"
                        size={20}
                        color="white"
                        style={styles.heartIcon}
                    />
                </TouchableOpacity>
                <Image
                    resizeMode="cover"
                    style={styles.productImage}
                    source={{ uri: item.thumbnail, cache: 'force-cache' }}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.productName}>
                        {item.name?.slice(0, 30) + '...'}
                    </Text>
                </View>

                <View style={styles.priceContainer}>
                    <View style={styles.priceChildContainer}>
                        <Text style={styles.productPrice}>
                            {item.price
                                ? item.price
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                                  ' VND'
                                : null}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.cartIconContainer}>
                        <Text style={{ color: 'coral' }}>
                            Đã bán {item.soldQuantity && item.soldQuantity >= 1000 ? Math.round(item.soldQuantity/10) / 100 + 'K' : 0}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
});
