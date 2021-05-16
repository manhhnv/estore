import React from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    ToastAndroid
} from 'react-native';
import styles from './styles';
import { Product } from 'estore/graphql/generated';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice/index';
import { addToWishlist } from 'estore/redux/slice/wishlistSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
    WishList as WL,
    useRemoveFromWistlistMutation
} from 'estore/graphql/generated';
import { RootStackParamList } from 'estore/types';
type GridProps = {
    products: Array<Partial<Product> | null>;
    addProductHandle: (productId: string) => void;
    wishlist: WL[];
    addToWishlist: ActionCreatorWithPayload<any, string>;
};

const Grid = ({
    products,
    addProductHandle,
    wishlist,
    addToWishlist
}: GridProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const renderItem = ({ item }: { item: Partial<Product> | null }) => {
        if (item) {
            return (
                <ProductItem
                    item={item}
                    navigation={navigation}
                    addProductHandle={addProductHandle}
                    wishlist={wishlist}
                    addToWishlist={addToWishlist}
                />
            );
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

type ProductItemProps = {
    item: Partial<Product>;
    navigation: NavigationProp<RootStackParamList>;
    addProductHandle: (productId: string) => void;
    wishlist: WL[];
    addToWishlist: ActionCreatorWithPayload<any, string>;
};

export const ProductItem = React.memo(
    ({
        item,
        navigation,
        addProductHandle,
        wishlist,
        addToWishlist
    }: ProductItemProps) => {
        const [
            removeProduct,
            { called, data, loading, error }
        ] = useRemoveFromWistlistMutation();

        const removeProductHandle = (productId: string) => {
            removeProduct({ variables: { productId: productId } });
        };

        const productDetail = (productId: string) => {
            navigation.navigate('ProductDetail', { productId: productId });
        };

        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => productDetail(item.id ? item.id : '')}
            >
                <View style={styles.productItem}>
                    {item.rawDiscount ? (
                        <View style={styles.productSale}>
                            <FontAwesome5
                                name="tags"
                                size={40}
                                color="#ee4d2d"
                            />
                            <Text style={styles.saleText}>
                                {'-' + item.rawDiscount + '%'}
                            </Text>
                        </View>
                    ) : null}

                    {wishlist.filter((it: WL) => it.product.id === item.id)
                        .length === 0 ? (
                        <TouchableOpacity
                            style={styles.heartIconContainer}
                            onPress={() => {
                                if (item && item.id) {
                                    addProductHandle(item.id);
                                }
                            }}
                        >
                            <AntDesign
                                name="heart"
                                size={20}
                                color="white"
                                style={styles.heartIcon}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.heartIconContainerInWL}
                            onPress={() => {
                                let revert = wishlist.filter(
                                    (it: WL) => it.product.id !== item.id
                                );
                                addToWishlist(revert);
                                item && item.id
                                    ? removeProductHandle(item.id)
                                    : null;
                                ToastAndroid.show(
                                    'Đã xóa khỏi mục ưa thích',
                                    ToastAndroid.SHORT
                                );
                            }}
                        >
                            <AntDesign
                                name="heart"
                                size={20}
                                color="red"
                                style={styles.heartIcon}
                            />
                        </TouchableOpacity>
                    )}

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
                                          .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              '.'
                                          ) + ' VND'
                                    : null}
                            </Text>
                            <Text style={styles.productPriceBeforeDiscount}>
                                {item.priceBeforeDiscount
                                    ? item.priceBeforeDiscount
                                          .toString()
                                          .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              '.'
                                          ) + ' ₫'
                                    : null}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
);
const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
        wishlist: state.wishlist
    };
};
const mapDispatchToProps = { addToWishlist };
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Grid));
