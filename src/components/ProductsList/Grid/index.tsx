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
import { HomeStackParamList } from 'estore/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type GridProps = {
    products: Array<Partial<Product> | null>;
};

const Grid = ({ products }: GridProps) => {
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    const renderItem = ({ item }: { item: Partial<Product> | null }) => {
        if (item) {
            return <ProductItem item={item} navigation={navigation} />;
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
                        flexDirection: 'column'
                    }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={8}
                    numColumns={2}
                    removeClippedSubviews={true}
                />
            </SafeAreaView>
        );
    }
    return <View></View>;
};
export default Grid;

type ProductItemProps = {
    item: Partial<Product>;
    navigation: NavigationProp<HomeStackParamList>;
}

const ProductItem = React.memo(({ item, navigation }: ProductItemProps) => {
    const productDetail = (productId: string) => {
        navigation.navigate("ProductDetail", { productId: productId })
    }
    return (
        <TouchableOpacity key={item.id} onPress={() => productDetail(item.id ? item.id : '')}>
            <View style={styles.productItem}>
                {item.rawDiscount ? (
                    <View style={styles.productSale}>
                        <FontAwesome5 name="tags" size={40} color="coral" />
                        <Text style={styles.saleText}>
                            {'-' + item.rawDiscount + '%'}
                        </Text>
                    </View>
                ) : null}

                <TouchableOpacity style={styles.heartIconContainer} onPress={() => console.log(item.id)}>
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
