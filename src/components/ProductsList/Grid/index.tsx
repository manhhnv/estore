import React from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
} from 'react-native';
import styles from './styles';
import { Product } from 'estore/graphql/generated';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
type GridProps = {
    products: Array<Partial<Product> | null>;
};

const Grid = ({ products }: GridProps) => {
    const renderItem = ({ item }: { item: Partial<Product> | null }) => {
        if (item) {
            return <ProductItem item={item} />;
        }
        return <Text></Text>;
    };
    if (products.length > 0) {
        return (
            <SafeAreaView>
                <FlatList
                    key={'_'}
                    keyExtractor={(item) => '_' + item?.id}
                    data={products}
                    renderItem={renderItem}
                    maxToRenderPerBatch={8}
                    contentContainerStyle={{
                        flexDirection: 'column',
                    }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={8}
                    numColumns={2}
                />
            </SafeAreaView>
        );
    }
    return <View></View>;
};
export default Grid;

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
                        <Text style={styles.productPriceBeforeDiscount}>
                            {item.priceBeforeDiscount
                                ? item.priceBeforeDiscount
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                                  ' ₫'
                                : null}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.cartIconContainer}>
                        <FontAwesome5
                            name="cart-plus"
                            size={18}
                            color="white"
                            style={styles.iconCart}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
});
