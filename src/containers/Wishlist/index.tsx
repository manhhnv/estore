import React, { useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ToastAndroid
} from 'react-native';
import {
    useRemoveFromWistlistMutation,
    WishList as WL
} from 'estore/graphql/generated';
import styles from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackParamList } from 'estore/types';
import { UserSliceType } from 'estore/redux/slice/userSlice';
import { RootState } from 'estore/redux/slice/index';
import { connect } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { FontAwesome5 } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
    addToWishlist,
    removeFromWishlist
} from 'estore/redux/slice/wishlistSlice';
type WishlistProps = {
    user: UserSliceType;
    wishlist: WL[];
    addToWishlist: ActionCreatorWithPayload<any, string>;
};
const { width, height } = Dimensions.get('window');

const Wishlist = ({ user, wishlist, addToWishlist }: WishlistProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [
        removeProduct,
        { called, data, loading, error }
    ] = useRemoveFromWistlistMutation();

    const removeProductHandle = (productId: string) => {
        removeProduct({ variables: { productId: productId } });
    };
    const removeProductSuccess = () => {
        ToastAndroid.show('Đã xóa khỏi mục ưa thích', ToastAndroid.SHORT);
    };
    const removeProductFailed = () => {
        ToastAndroid.show('Có lỗi xảy ra', ToastAndroid.SHORT);
    };

    useEffect(() => {
        if (error && error.message) {
            removeProductFailed();
        }
    }, [error]);
    useEffect(() => {
        if (data && data.removeFromWistlist) {
            const wishlist = data.removeFromWistlist;
            addToWishlist(wishlist);
            removeProductSuccess();
        }
    }, [data]);
    const renderItem = ({ item }: { item: WL }) => {
        if (item) {
            return (
                <ProductItem
                    item={item}
                    navigation={navigation}
                    removeProductHandle={removeProductHandle}
                />
            );
        }
        return <Text></Text>;
    };

    if (wishlist && wishlist.length) {
        return (
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <FlatList
                    data={wishlist}
                    renderItem={renderItem}
                    maxToRenderPerBatch={10}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        );
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}
        >
            <Image
                resizeMode="contain"
                style={{ width: '80%', height: '80%' }}
                source={{
                    uri:
                        'https://bollyglow.com/wp-content/themes/bollyglow/assets/images/empty_wishlist.png',
                    cache: 'force-cache'
                }}
            />
        </View>
    );
};

type ProductItemProps = {
    item: WL;
    removeProductHandle: (productId: string) => void;
    navigation: NavigationProp<RootStackParamList>;
};

const ProductItem = React.memo(
    ({ item, navigation, removeProductHandle }: ProductItemProps) => {
        const productDetail = (productId: string) => {
            navigation.navigate('ProductDetail', { productId: productId });
        };
        return (
            <Swipeable
                renderRightActions={() => (
                    <LeftComponent
                        productId={item.product.id}
                        removeProductHandle={removeProductHandle}
                    />
                )}
            >
                <TouchableOpacity
                    key={item.product.id}
                    onPress={() =>
                        productDetail(item.product.id ? item.product.id : '')
                    }
                >
                    <View style={styles.productItem}>
                        {/* {item.product.rawDiscount ? (
                    <View style={styles.productSale}>
                        <FontAwesome5 name="tags" size={40} color="#ee4d2d" />
                        <Text style={styles.saleText}>
                            {'-' + item.product.rawDiscount + '%'}
                        </Text>
                    </View>
                ) : null} */}

                        <View style={styles.imageContainer}>
                            <Image
                                resizeMode="cover"
                                style={styles.productImage}
                                source={{
                                    uri: item.product.thumbnail,
                                    cache: 'force-cache'
                                }}
                            />
                        </View>

                        <View style={styles.priceContainer}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.productName}>
                                    {item.product.name?.slice(0, 40) + '...'}
                                </Text>
                                <Text style={styles.productDescription}>
                                    {item.product.description?.slice(0, 60) +
                                        '...'}
                                </Text>
                            </View>

                            <View style={styles.priceBottomContainer}>
                                <Text style={styles.productPrice}>
                                    {item.product.price
                                        ? item.product.price
                                              .toString()
                                              .replace(
                                                  /\B(?=(\d{3})+(?!\d))/g,
                                                  ','
                                              ) + ' VND'
                                        : null}
                                </Text>
                                <Text style={styles.productPriceBeforeDiscount}>
                                    {item.product.priceBeforeDiscount
                                        ? item.product.priceBeforeDiscount
                                              .toString()
                                              .replace(
                                                  /\B(?=(\d{3})+(?!\d))/g,
                                                  ','
                                              ) + ' ₫'
                                        : null}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        );
    }
);

type LeftComponentProps = {
    productId: string;
    removeProductHandle: (productId: string) => void;
};

const LeftComponent = ({
    productId,
    removeProductHandle
}: LeftComponentProps) => {
    return (
        <TouchableOpacity
            style={{
                width: '15%',
                backgroundColor: '#ee4d2d',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={() => {
                removeProductHandle(productId);
            }}
        >
            <FontAwesome5 name="heart-broken" size={25} color="white" />
        </TouchableOpacity>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
        wishlist: state.wishlist
    };
};

const mapDispatchToProps = { removeFromWishlist, addToWishlist };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Wishlist));
