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
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'estore/types';

type SlideProps = {
    products: Array<Partial<Product> | null>;
};

const Slide = ({ products }: SlideProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const renderItem = ({ item }: { item: Partial<Product> | null }) => {
        if (item) {
            return <ProductItem item={item} navigation={navigation}/>;
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

type ProductItemProps = {
    item: Partial<Product>;
    navigation: NavigationProp<RootStackParamList>
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
                        <FontAwesome5 name="tags" size={40} color="#ee4d2d" />
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
                        <Text style={{ color: '#ee4d2d' }}>
                            Đã bán {item.soldQuantity && item.soldQuantity >= 1000 ? Math.round(item.soldQuantity/100) / 10 + 'K' : item.soldQuantity}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
});
